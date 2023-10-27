<?php

namespace App\Controller\Admin;

use App\Entity\Answer;
use App\Entity\Contact;
use App\Entity\Presentation;
use App\Entity\Project;
use App\Entity\Education;
use App\Entity\Links;
use App\Entity\Outils;
use App\Entity\Status;
use App\Entity\Skills;
use App\Entity\Categories;
use App\Entity\Page;
use App\Entity\Block;
use App\Form\AnswerType;
use App\Service\EmailSender;
use Doctrine\Persistence\ManagerRegistry;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\UserMenu;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ContactRepository;
use App\Repository\AnswerRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/admin")
 * @IsGranted("ROLE_ADMIN")
 */
class DashboardController extends AbstractDashboardController
{
    public function __construct(
        private ContactRepository $contactRepository,
        private AnswerRepository $answerRepository,
        private EmailSender $mailer,
        private ManagerRegistry $doctrine,
    ) {}

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Administration');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linktoRoute('Retour au site', 'fas fa-home', 'home');
        yield MenuItem::section('Général');
        yield MenuItem::linktoDashboard('Messagerie', 'fa-solid fa-envelopes-bulk');
        yield MenuItem::subMenu('Site', 'fas fa-sitemap')->setSubItems([
            MenuItem::linkToCrud('Pages', 'far fa-file', Page::class),
            MenuItem::linkToCrud('Contenus', 'far fa-file-alt', Block::class),
        ]);
        yield MenuItem::section('Accueil');
        yield MenuItem::linkToCrud('Présentation', 'far fa-address-card', Presentation::class);
        yield MenuItem::subMenu('Projets', 'fas fa-laptop-code')->setSubItems([
            MenuItem::linkToCrud('Réalisations', 'fas fa-pencil-ruler', Project::class),
            MenuItem::linkToCrud('Liens', 'fas fa-link', Links::class),
            MenuItem::linkToCrud('Outils', 'fas fa-code', Outils::class),
        ]);
        yield MenuItem::subMenu('Compétences', 'fas fa-briefcase')->setSubItems([
            MenuItem::linkToCrud('Compétences', 'fas fa-briefcase', Skills::class),
            MenuItem::linkToCrud('Catégories', 'fas fa-list', Categories::class),
        ]);
        yield MenuItem::linkToCrud('Formations', 'fas fa-graduation-cap', Education::class);
        yield MenuItem::linkToCrud('Status de publication', 'fas fa-toggle-on', Status::class);
    }

    public function configureUserMenu(UserInterface $user): UserMenu
    {
        return parent::configureUserMenu($user)
            ->addMenuItems([
                MenuItem::linkToRoute('Changer le mot de passe', 'fa fa-id-card', 'app_forgot_password_request', ['...' => '...']),
            ]);
    }

    public function index(): Response
    {
        return $this->render('admin/dashboard.html.twig', [
            'contacts' => $this->contactRepository->findAll(),
            'answers' => $this->answerRepository->findAllAnswers(),
        ]);
    }

    public function show(Contact $contact, Request $request): Response
    {
        if($contact->getUnread() == true) {
            $contact->setUnread(false);

            $entityManager = $this->doctrine->getManager();
            $entityManager->flush();
        }

        $answer = new Answer();
        $form = $this->createForm(AnswerType::class, $answer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $answer->setContactAnswer($contact);
            $entityManager = $this->doctrine->getManager();
            $entityManager->persist($answer);
            $entityManager->flush();

            $this->mailer->sendContactReply(
                'contact@charlottesaidi.fr', 'Portfolio Développeuse Web',
                $contact->getEmail(),
                'Re : ' .$contact->getObject(),
                ['messageContent' => $answer->getMessage()],
                'blocks/answer/reply-email.html.twig'
            );
        }

        return $this->render('admin/show.html.twig', [
            'contact' => $contact,
            'answer' => $answer,
            'form' => $form->createView(),
        ]);
    }

    public function delete(Request $request, Contact $contact): Response
    {
        if ($this->isCsrfTokenValid('delete'.$contact->getId(), $request->request->get('_token'))) {
            $entityManager = $this->doctrine->getManager();
            $entityManager->remove($contact);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/answer-delete/{id}', name: 'answer_delete', methods: ['POST'])]
    public function deleteAnswer(Request $request, Answer $answer): Response
    {
        if ($this->isCsrfTokenValid('delete'.$answer->getId(), $request->request->get('_token'))) {
            $entityManager = $this->doctrine->getManager();
            $entityManager->remove($answer);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin', [], Response::HTTP_SEE_OTHER);
    }
}
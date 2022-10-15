<?php

namespace App\Controller\Admin;

use App\Entity\Contact;
use App\Entity\Answer;
use App\Form\ContactType;
use App\Repository\ContactRepository;
use App\Form\AnswerType;
use App\Repository\AnswerRepository;
use App\Service\EmailSender;
use App\Controller\Admin\DashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @IsGranted("ROLE_ADMIN")
 */
class ContactAdminController extends DashboardController
{
    private $contactRepository;
    private $answerRepository;
    private $mailer;

    public function __construct(ContactRepository $contactRepository, AnswerRepository $answerRepository, EmailSender $mailer) {
        $this->contactRepository = $contactRepository;
        $this->answerRepository = $answerRepository;
        $this->mailer = $mailer;
    }

    #[Route('admin/messagerie', name: 'messagerie')]
    public function index(): Response
    {
        return $this->render('admin/messagerie.html.twig', [
            'contacts' => $this->contactRepository->findAll(),
            'answers' => $this->answerRepository->findAllAnswers(),
        ]);
    }

    #[Route('admin/contact/{id}', name: 'contact_show', methods: ['GET', 'POST'])]
    public function show(Contact $contact, Request $request): Response
    {
        if($contact->getUnread() == true) {
            $contact->setUnread(false);
            
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->flush();
        }

        $answer = new Answer();
        $form = $this->createForm(AnswerType::class, $answer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $answer->setContactAnswer($contact);
            $entityManager = $this->getDoctrine()->getManager();
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

    #[Route('admin/contact-delete/{id}', name: 'contact_delete', methods: ['POST'])]
    public function delete(Request $request, Contact $contact): Response
    {
        if ($this->isCsrfTokenValid('delete'.$contact->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($contact);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('admin/answer-delete/{id}', name: 'answer_delete', methods: ['POST'])]
    public function deleteAnswer(Request $request, Answer $answer): Response
    {
        if ($this->isCsrfTokenValid('delete'.$answer->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($answer);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin', [], Response::HTTP_SEE_OTHER);
    }
}
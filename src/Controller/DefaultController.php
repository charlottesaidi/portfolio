<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Contact;
use App\Form\ContactType;
use App\Repository\PresentationRepository;
use App\Repository\PageRepository;
use App\Repository\BlockRepository;
use App\Repository\EducationRepository;
use App\Repository\ProjectRepository;
use App\Repository\SkillsRepository;
use App\Repository\OutilsRepository;

class DefaultController extends AbstractController
{
    public function __construct(
        private BlockRepository $blockRepository, 
        private PageRepository $pageRepository, 
        private PresentationRepository $presentationRepo, 
        private EducationRepository $educationRepo, 
        private ProjectRepository $projectRepo,  
        private OutilsRepository $toolRepo, 
        private SkillsRepository $skillsRepo
    ) {}

    public function index(Request $request): Response
    {
        // Traitement contact
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($contact);
            $entityManager->flush();

            $this->addFlash('success', 'Merci, votre message m\'est bien parvenu. Je vous répondrai très bientôt !');
            return $this->redirectToRoute('home', [], Response::HTTP_SEE_OTHER);
        }
        
        return $this->render('pages/home.html.twig', [
            'presentation' => $this->presentationRepo->findLatest(),
            'projects' => $this->projectRepo->getAllProject(),
            'education' => $this->educationRepo->getAllEducation(),
            'tools' => $this->toolRepo->findAll(),
            'language_skills' => $this->skillsRepo->getAllSkillsByCategory('langages'),
            'framework_skills' => $this->skillsRepo->getAllSkillsByCategory('frameworks et librairies'),
            'misc_skills' => $this->skillsRepo->getAllSkillsByCategory('autres'),
            'soft_skills' => $this->skillsRepo->getAllSkillsByCategory('langages'),
            'contact' => $contact,
            'form' => $form->createView(),
        ]);
    }

    public function showPage($slug): Response
    {
        $page = $this->pageRepository->findOneBy(['slug' => $slug]);
        return $this->render('pages/page.html.twig', [
            'page' => $page
        ]);
    }
}

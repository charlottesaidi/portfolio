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

class DefaultController extends AbstractController
{
    public $presentationRepo;
    public $pageRepository;
    public $blockRepository;
    public $educationRepo;
    public $projectRepo;
    public $skillsRepo;

    public function __construct(BlockRepository $blockRepository, PageRepository $pageRepository, PresentationRepository $presentationRepo, EducationRepository $educationRepo, ProjectRepository $projectRepo, SkillsRepository $skillsRepo) {
        $this->presentationRepo = $presentationRepo;
        $this->pageRepository = $pageRepository;
        $this->blockRepository = $blockRepository;
        $this->educationRepo = $educationRepo;
        $this->projectRepo = $projectRepo;
        $this->skillsRepo = $skillsRepo;
    }

    public function index(Request $request): Response
    {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($contact);
            $entityManager->flush();

            return $this->redirectToRoute('home', [], Response::HTTP_SEE_OTHER);
        }
        
        return $this->render('pages/home.html.twig', [
            'presentation' => $this->presentationRepo->findLatest(),
            'projects' => $this->projectRepo->getAllProject(),
            'education' => $this->educationRepo->getAllEducation(),
            'competences' => $this->skillsRepo->getAllSkills(),
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

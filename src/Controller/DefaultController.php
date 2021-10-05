<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Contact;
use App\Form\ContactType;
use App\Repository\PresentationRepository;
use App\Repository\EducationRepository;
use App\Repository\ProjectRepository;
use App\Repository\SkillsRepository;

class DefaultController extends AbstractController
{
    public $presentationRepo;
    public $educationRepo;
    public $projectRepo;
    public $skillsRepo;

    public function __construct(PresentationRepository $presentationRepo, EducationRepository $educationRepo, ProjectRepository $projectRepo, SkillsRepository $skillsRepo) {
        $this->presentationRepo = $presentationRepo;
        $this->educationRepo = $educationRepo;
        $this->projectRepo = $projectRepo;
        $this->skillsRepo = $skillsRepo;
    }

    #[Route('/', name: 'home')]
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

    #[Route('/politique-de-confidentialite', name: 'rgpd')]
    public function rgpd(): Response
    {
        return $this->render('pages/rgpd.html.twig');
    }
}

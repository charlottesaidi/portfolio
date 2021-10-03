<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Form\PresentationType;
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
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'presentation' => $this->presentationRepo->findLatest(),
            'projects' => $this->projectRepo->getAllProject(),
            'education' => $this->educationRepo->getAllEducation(),
            'competences' => $this->skillsRepo->getAllSkills(),
        ]);
    }
}

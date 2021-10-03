<?php

namespace App\Controller\Admin;

use App\Entity\Presentation;
use App\Entity\Project;
use App\Entity\Education;
use App\Entity\Links;
use App\Entity\Outils;
use App\Entity\Status;
use App\Entity\Skills;
use App\Entity\Categories;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\UserMenu;
use Symfony\Component\Security\Core\User\UserInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     * @IsGranted("ROLE_ADMIN")
     */
    public function index(): Response
    {
        return $this->render('admin/dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Administration');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linktoRoute('Retour au site', 'fas fa-home', 'home');
        yield MenuItem::section('Général');
        yield MenuItem::linktoDashboard('Dashboard', 'fas fa-project-diagram');
        yield MenuItem::section('Contenus');
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
}

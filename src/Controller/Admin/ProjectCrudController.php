<?php

namespace App\Controller\Admin;

use App\Entity\Project;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class ProjectCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Project::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            Field::new('title', 'Titre'),
            TextEditorField::new('description', 'Description'),
            ImageField::new('image', 'Photo')
                ->setBasePath('uploads/projets')
                ->setUploadDir('public/uploads/projets')
                ->setUploadedFileNamePattern('[randomhash].[extension]'),
            AssociationField::new('outils', 'Outil.s/Techno.s utilisé.e.s'),
            AssociationField::new('status', 'Status de publication'),
        ];
    }
}

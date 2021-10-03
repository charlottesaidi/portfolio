<?php

namespace App\Controller\Admin;

use App\Entity\Skills;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class SkillsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Skills::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            Field::new('title', 'Label'),
            Field::new('slug', 'Slug identifiant'),
            Field::new('progress', 'Niveau de progression'),
            ImageField::new('image', 'Image')
                ->setBasePath('uploads/competences')
                ->setUploadDir('public/uploads/competences')
                ->setUploadedFileNamePattern('[randomhash].[extension]'),
            AssociationField::new('categorie', 'Categorie'),
        ];
    }
}

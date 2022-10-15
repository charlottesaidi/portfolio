<?php

namespace App\Controller\Admin;

use App\Entity\Presentation;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class PresentationCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Presentation::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextEditorField::new('text_block', 'Description'),
            ImageField::new('image', 'Photo')
                ->setBasePath('uploads/presentation')
                ->setUploadDir('public/uploads/presentation')
                ->setUploadedFileNamePattern('[randomhash].[extension]'),
            AssociationField::new('status', 'Status de publication'),
        ];
    }
}

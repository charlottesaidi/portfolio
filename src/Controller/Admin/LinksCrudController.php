<?php

namespace App\Controller\Admin;

use App\Entity\Links;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class LinksCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Links::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            Field::new('title', 'Libellé'),
            Field::new('href', 'Href'),
            AssociationField::new('project', 'Projet lié'),
        ];
    }
}

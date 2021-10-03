<?php

namespace App\Controller\Admin;

use App\Entity\Outils;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;

class OutilsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Outils::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            Field::new('title', "Language, Framework, Librairie..."),
        ];
    }
}

<?php

namespace App\Controller;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BaseController extends AbstractController
{
    public static function getSubscribedServices(): array
    {
        return array_merge(parent::getSubscribedServices(), [
            ManagerRegistry::class
        ]);
    }

    protected function getDoctrine(): ManagerRegistry
    {
        if (!$this->container->has(ManagerRegistry::class)) {
            throw new \LogicException('The ManagerRegistry is not registered in your application.');
        }

        return $this->container->get(ManagerRegistry::class);
    }
}
<?php

namespace App\Repository;

use App\Entity\Presentation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Presentation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Presentation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Presentation[]    findAll()
 * @method Presentation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PresentationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Presentation::class);
    }

    public function findLatest()
    {
        return $this->createQueryBuilder('p')
            ->select('p, s')
            ->join('p.status', 's')
            ->andWhere('s.title = :val')
            ->setParameter('val', 'published')
            ->orderBy('p.created_at', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    // /**
    //  * @return Presentation[] Returns an array of Presentation objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Presentation
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

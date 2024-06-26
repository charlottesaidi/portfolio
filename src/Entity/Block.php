<?php

namespace App\Entity;

use App\Repository\BlockRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Table(name:"block")]
#[ORM\Entity(repositoryClass: BlockRepository::class)]
class Block
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type:"integer")]
    private $id;

    #[ORM\Column(type:"string")]
    private ?string $title;

    #[ORM\Column(type:"text")]
    private ?string $content;

    #[ORM\ManyToOne(targetEntity:Page::class, inversedBy:"blocks")]
    #[ORM\JoinColumn(nullable:false)]
    private ?Page $page;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getPage(): ?Page
    {
        return $this->page;
    }

    public function setPage(?Page $page): self
    {
        $this->page = $page;

        return $this;
    }
}

<?php

namespace App\Entity;

use App\Repository\AnswerRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Table(name: "portfolio_answer")]
#[ORM\Entity(repositoryClass: AnswerRepository::class)]
class Answer
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]
    private $id;

    #[ORM\Column(type: "text")]
    private ?string $message;

    #[ORM\Column(type: "datetime")]
    private \DateTime $created_at;

    #[ORM\ManyToOne(targetEntity: Contact::class, inversedBy: "admin_answer")]
    private ?Contact $contact_answer;

    public function __construct()
    {
        $this->created_at = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }
    
    public function getContactAnswer(): ?Contact
    {
        return $this->contact_answer;
    }

    public function setContactAnswer(?Contact $contact_answer): self
    {
        $this->contact_answer = $contact_answer;

        return $this;
    }
}

<?php

namespace App\Service;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mailer\MailerInterface;

class EmailSender
{
    public $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }
    public function sendAdminEmail($from, $object, $to, $subject, $template)
    {
        $sendEmail = (new TemplatedEmail())
            ->from(new Address($from, $object))
            ->to($to)
            ->subject($subject)
            ->htmlTemplate($template)
        ;

        $this->mailer->send($sendEmail);
    }

    public function sendContactReply($from, $object, $to, $subject, $context, $template)
    {
        $sendEmail = (new TemplatedEmail())
            ->from(new Address($from, $object))
            ->to($to)
            ->subject($subject)
            ->context($context)
            ->htmlTemplate($template)
        ;

        $this->mailer->send($sendEmail);
    }
}
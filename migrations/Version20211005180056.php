<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211005180056 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE portfolio_answer DROP FOREIGN KEY FK_DC36A710E7A1254A');
        $this->addSql('DROP INDEX UNIQ_DC36A710E7A1254A ON portfolio_answer');
        $this->addSql('ALTER TABLE portfolio_answer CHANGE contact_id contact_answer_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE portfolio_answer ADD CONSTRAINT FK_DC36A710C4C26B7C FOREIGN KEY (contact_answer_id) REFERENCES portfolio_contact (id)');
        $this->addSql('CREATE INDEX IDX_DC36A710C4C26B7C ON portfolio_answer (contact_answer_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE portfolio_answer DROP FOREIGN KEY FK_DC36A710C4C26B7C');
        $this->addSql('DROP INDEX IDX_DC36A710C4C26B7C ON portfolio_answer');
        $this->addSql('ALTER TABLE portfolio_answer CHANGE contact_answer_id contact_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE portfolio_answer ADD CONSTRAINT FK_DC36A710E7A1254A FOREIGN KEY (contact_id) REFERENCES portfolio_contact (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_DC36A710E7A1254A ON portfolio_answer (contact_id)');
    }
}

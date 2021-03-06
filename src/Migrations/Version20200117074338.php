<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200117074338 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        // $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251E3B69A9AF FOREIGN KEY (variant_id) REFERENCES variant (id)');
        // $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251E3DA206A5 FOREIGN KEY (order_entity_id) REFERENCES `order` (id)');
        // $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        // $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251E3B69A9AF');
        // $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251E3DA206A5');
        // $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}

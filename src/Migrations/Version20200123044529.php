<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200123044529 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE delivery (id INT AUTO_INCREMENT NOT NULL, order_entity_id INT DEFAULT NULL, deliverer_id INT DEFAULT NULL, UNIQUE INDEX UNIQ_3781EC103DA206A5 (order_entity_id), INDEX IDX_3781EC10B6A6A3F4 (deliverer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE delivery ADD CONSTRAINT FK_3781EC103DA206A5 FOREIGN KEY (order_entity_id) REFERENCES order_entity (id)');
        $this->addSql('ALTER TABLE delivery ADD CONSTRAINT FK_3781EC10B6A6A3F4 FOREIGN KEY (deliverer_id) REFERENCES user (id)');
        // $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251E3DA206A5 FOREIGN KEY (order_entity_id) REFERENCES order_entity (id)');
        // $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE delivery');
        // $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251E3DA206A5');
        // $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}

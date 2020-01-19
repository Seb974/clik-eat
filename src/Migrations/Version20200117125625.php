<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200117125625 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        // $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251E3DA206A5');
        // $this->addSql('CREATE TABLE order_entity (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, payment_id VARCHAR(120) DEFAULT NULL, payment_date_time DATETIME DEFAULT NULL, total_ttc DOUBLE PRECISION DEFAULT NULL, total_ht DOUBLE PRECISION DEFAULT NULL, total_tax DOUBLE PRECISION DEFAULT NULL, status VARCHAR(120) DEFAULT NULL, delivery_address LONGTEXT DEFAULT NULL, INDEX IDX_CDA754BDA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        // $this->addSql('ALTER TABLE order_entity ADD CONSTRAINT FK_CDA754BDA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        // $this->addSql('DROP TABLE `order`');
        // $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251E3DA206A5');
        // $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251E3DA206A5 FOREIGN KEY (order_entity_id) REFERENCES order_entity (id)');
        // $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        // $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251E3DA206A5');
        // $this->addSql('CREATE TABLE `order` (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, payment_id VARCHAR(120) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, payment_date_time DATETIME DEFAULT NULL, total_ttc DOUBLE PRECISION DEFAULT NULL, total_ht DOUBLE PRECISION DEFAULT NULL, total_tax DOUBLE PRECISION DEFAULT NULL, status VARCHAR(120) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, delivery_address LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_F5299398A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        // $this->addSql('ALTER TABLE `order` ADD CONSTRAINT FK_F5299398A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        // $this->addSql('DROP TABLE order_entity');
        // $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251E3DA206A5');
        // $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251E3DA206A5 FOREIGN KEY (order_entity_id) REFERENCES `order` (id)');
        // $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}

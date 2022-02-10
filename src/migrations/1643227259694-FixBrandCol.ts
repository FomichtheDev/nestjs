import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixBrandCol1643227259694 implements MigrationInterface {
  name = 'FixBrandCol1643227259694';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "brand" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "brand"`);
  }
}

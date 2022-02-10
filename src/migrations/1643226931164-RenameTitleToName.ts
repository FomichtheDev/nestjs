import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameTitleToName1643226931164 implements MigrationInterface {
  name = 'RenameTitleToName1643226931164';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`,
    );
  }
}

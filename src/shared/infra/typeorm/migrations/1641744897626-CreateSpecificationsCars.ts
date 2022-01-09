import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSpecificationsCars1641744897626
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "specifications_cars",
        columns: [
          {
            name: "car_id",
            type: "uuid",
          },
          {
            name: "specification_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKCarSpecification",
            referencedTableName: "cars",
            referencedColumnNames: ["id"],
            columnNames: ["car_id"],
            onUpdate: "SET NULL",
            onDelete: "SET NULL",
          },
          {
            name: "FKSpecificationCar",
            referencedTableName: "specifications",
            referencedColumnNames: ["id"],
            columnNames: ["specification_id"],
            onUpdate: "SET NULL",
            onDelete: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("specifications_cars");
  }
}

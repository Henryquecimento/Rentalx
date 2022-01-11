import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarsSpecificationsUseCase } from "./CreateCarsSpecificationsUseCase";

let createCarsSpecificationsUseCase: CreateCarsSpecificationsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car Specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarsSpecificationsUseCase = new CreateCarsSpecificationsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should not be able to add a new specification to the a non-existent car", async () => {
    expect(async () => {
      const car_id = "1234";
      const specification_id = ["4321"];

      await createCarsSpecificationsUseCase.execute({
        car_id,
        specification_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to add a new specification to the car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car Name",
      description: "Car Description",
      daily_rate: 80,
      license_plate: "ABC-1234",
      fine_amount: 50,
      brand: "Car Brand",
      category_id: "category_id",
    });

    const specification_id = ["4321"];

    await createCarsSpecificationsUseCase.execute({
      car_id: car.id,
      specification_id,
    });
  });
});
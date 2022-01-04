import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarsUseCase } from "./CreateCarsUseCase";

let createCarsUseCase: CreateCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarsUseCase = new CreateCarsUseCase(carsRepositoryInMemory);
  });

  it("Should be able to create a new car", async () => {
    const car = await createCarsUseCase.execute({
      name: "Car Name",
      description: "Car Description",
      daily_rate: 80,
      license_plate: "ABC-1234",
      fine_amount: 50,
      brand: "Car Brand",
      category_id: "category_id",
    });

    expect(car).toHaveProperty("id");
  });

  it("Should not be able to create a car with existent license plate", () => {
    expect(async () => {
      await createCarsUseCase.execute({
        name: "Car1",
        description: "Car Description1",
        daily_rate: 80,
        license_plate: "ABC-1234",
        fine_amount: 50,
        brand: "Car Brand",
        category_id: "category_id",
      });

      await createCarsUseCase.execute({
        name: "Car2",
        description: "Car Description2",
        daily_rate: 80,
        license_plate: "ABC-1234",
        fine_amount: 50,
        brand: "Car Brand",
        category_id: "category_id",
      });

    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to create a car with available true by default", async () => {
    const car = await createCarsUseCase.execute({
      name: "Car Available",
      description: "Car Description",
      daily_rate: 80,
      license_plate: "ABCD-1234",
      fine_amount: 50,
      brand: "Car Brand",
      category_id: "category_id",
    });

    expect(car.available).toBe(true);
  });
});

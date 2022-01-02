import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { CreateCarsUseCase } from "./CreateCarsUseCase";

let createCarsUseCase: CreateCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarsUseCase = new CreateCarsUseCase(carsRepositoryInMemory);
  });

  it("Should be able to create a new car", async () => {
    await createCarsUseCase.execute({
      name: "Car Name",
      description: "Car Description",
      daily_rate: 80,
      license_plate: "ABC-1234",
      fine_amount: 50,
      brand: "Car Brand",
      category_id: "category_id",
    });
  });
});

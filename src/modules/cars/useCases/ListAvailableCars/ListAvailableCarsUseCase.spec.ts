import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car test",
      description: "List Test Description",
      daily_rate: 70,
      license_plate: "TEST-1234",
      fine_amount: 50,
      brand: "Test",
      category_id: "fb15a6ca-2234-45f3-8f50-90eeaac5869d",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car Brand Test",
      description: "Car description",
      daily_rate: 70,
      license_plate: "TEST-4321",
      fine_amount: 50,
      brand: "Car_brand_test",
      category_id: "fb15a6ca-2234-45f3-8f50-90eeaac5869d",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "CarNameTest",
      description: "Car description",
      daily_rate: 70,
      license_plate: "TEST-1243",
      fine_amount: 50,
      brand: "Car_name_test",
      category_id: "fb15a6ca-2234-45f3-8f50-90eeaac5869d",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "CarNameTest",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car Test",
      description: "Car description",
      daily_rate: 70,
      license_plate: "TEST-1243",
      fine_amount: 50,
      brand: "Car_test",
      category_id: "1234",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "1234",
    });

    expect(cars).toEqual([car]);
  });
});

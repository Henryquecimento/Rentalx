import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateRentalUseCase } from "./CreateRentalsUseCase";

let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let createRentalUseCase: CreateRentalUseCase;

describe("Create a Car Rental", () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);
  });

  it("should be able to create a car rental", async () => {
    const rental = await createRentalUseCase.execute({
      car_id: "1234",
      user_id: "4321",
      expected_return_date: new Date(),
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to create a new car rental if there's another open to the same user", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        car_id: "1234",
        user_id: "4321",
        expected_return_date: new Date(),
      });

      await createRentalUseCase.execute({
        car_id: "1234",
        user_id: "4321",
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new car rental if there's another open to the same car", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        car_id: "123",
        user_id: "4321",
        expected_return_date: new Date(),
      });

      await createRentalUseCase.execute({
        car_id: "321",
        user_id: "4321",
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});

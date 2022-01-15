import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";

import { IRentalsRepository } from "../IRental";

class RentalsRepositoryInMemory implements IRentalsRepository {
  rentals: Rental[] = [];

  create(car_id: string, user_id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return this.rentals.find(
      (rental) => rental.car_id === car_id && rental.end_date === null
    );
  }
  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return this.rentals.find((rental) => rental.user_id === user_id);
  }
}

export { RentalsRepositoryInMemory };

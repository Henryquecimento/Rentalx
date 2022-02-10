import { getRepository, Repository } from "typeorm";

import { IRentalsDTO } from "@modules/rentals/dtos/IRentalsDTO";
import { IRentalsRepository } from "@modules/rentals/repositories/IRental";

import { Rental } from "../entities/Rental";

class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>;
  constructor() {
    this.repository = getRepository(Rental);
  }

  async create({
    car_id,
    user_id,
    expected_return_date,
  }: IRentalsDTO): Promise<Rental> {
    const rental = await this.repository.create({
      car_id,
      user_id,
      expected_return_date,
    });

    await this.repository.save(rental);

    return rental;
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    const openByCar = await this.repository.findOne({ car_id });

    return openByCar;
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const openByUser = await this.repository.findOne({ user_id });

    return openByUser;
  }

  async findById(id: string): Promise<Rental> {
    const rental = await this.repository.findOne({ id });

    return rental;
  }
}

export { RentalsRepository };

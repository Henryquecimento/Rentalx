import { Rental } from "../infra/typeorm/entities/Rental";

interface IRentalsRepository {
  create(car_id: string, user_id: string): Promise<void>;
  findOpenRentalByCar(car_id: string): Promise<Rental>;
  findOpenRentalByUser(user_id: string): Promise<Rental>;
}

export { IRentalsRepository };

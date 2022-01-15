import { IRentalsRepository } from "@modules/rentals/repositories/IRental";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  car_id: string;
  user_id: string;
  expected_return_date: Date;
}

class CreateRentalUseCase {
  constructor(private rentalsRepository: IRentalsRepository) {}

  async execute({
    car_id,
    user_id,
    expected_return_date,
  }: IRequest): Promise<void> {
    const carUnvailable = await this.rentalsRepository.findOpenRentalByCar(
      car_id
    );

    if (carUnvailable) throw new AppError("Car is unavailable");

    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(
      user_id
    );

    if (rentalOpenToUser)
      throw new AppError("There's a rental in progress for this user");
  }
}

export { CreateRentalUseCase };

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  car_id: string;
  specification_id: string[];
}

class CreateCarsSpecificationsUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  async execute({ car_id, specification_id }: IRequest): Promise<void> {
    const carAlreadyExists = await this.carsRepository.findById(car_id);

    if (!carAlreadyExists) {
      throw new AppError("Car does not exist");
    }
  }
}

export { CreateCarsSpecificationsUseCase };

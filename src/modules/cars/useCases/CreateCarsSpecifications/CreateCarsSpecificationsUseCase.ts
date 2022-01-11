import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  car_id: string;
  specification_id: string[];
}

class CreateCarsSpecificationsUseCase {
  constructor(
    private carsRepository: ICarsRepository,
    private specificationsRepository: ISpecificationRepository
  ) {}

  async execute({ car_id, specification_id }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError("Car does not exist");
    }

    const specifications = await this.specificationsRepository.findById(
      specification_id
    );

    carExists.specifications = specifications;

    await this.carsRepository.create(carExists);
  }
}

export { CreateCarsSpecificationsUseCase };
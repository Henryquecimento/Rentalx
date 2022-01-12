import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRepository {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IRepository): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists)
      throw new AppError("Specification already exists!", 400);

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationsUseCase };

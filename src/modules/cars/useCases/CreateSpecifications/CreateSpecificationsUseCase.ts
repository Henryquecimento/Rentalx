import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { ISpacificationRepository } from "@modules/cars/repositories/ISpecificationsRepository";

interface IRepository {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationsUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationsRepository: ISpacificationRepository
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

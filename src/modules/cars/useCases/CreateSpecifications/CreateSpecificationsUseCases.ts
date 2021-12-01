import { inject, injectable } from "tsyringe";

import { ISpacificationRepository } from "../../repositories/ISpecificationsRepository";

interface IRepository {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationsUseCases {
  constructor(
    @inject("SpecificationRepository")
    private specificationsRepository: ISpacificationRepository
  ) {}

  async execute({ name, description }: IRepository): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists)
      throw new Error("Specification already exists!");

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationsUseCases };

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

  execute({ name, description }: IRepository): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists)
      throw new Error("Specification already exists!");

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationsUseCases };

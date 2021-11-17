import { ISpacificationRepository } from "../../repositories/ISpecificationsRepository";

interface IRepository {
  name: string;
  description: string;
}

class CreateSpecificationsUseCases {
  constructor(private specificationsRepository: ISpacificationRepository) {}

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

import { SpecificationRepository } from "../repositories/SpecificationsRepository";

interface IRepository {
  name: string;
  description: string;
}

class CreateSpecificationsService {
  constructor(private specificationsRepository: SpecificationRepository) {}

  execute({ name, description }: IRepository) {
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

export { CreateSpecificationsService };

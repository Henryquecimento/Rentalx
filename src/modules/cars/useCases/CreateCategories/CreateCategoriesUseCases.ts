import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRepository {
  name: string;
  description: string;
}
class CreateCategoryUseCases {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRepository): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) throw new Error("Category already exists!");

    this.categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryUseCases };

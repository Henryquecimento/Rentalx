import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRepository {
  name: string;
  description: string;
}
class CreateCategoryUseCases {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRepository) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error("Category already exists!");

    this.categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryUseCases };

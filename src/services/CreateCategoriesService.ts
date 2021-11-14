import { CategoriesRepository } from "../repositories/CategoiesRepository";

interface IRepository {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRepository) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error("Category already exists!");

    this.categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryService };

import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRepository {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryUseCases {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRepository): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) throw new Error("Category already exists!");

    await this.categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryUseCases };

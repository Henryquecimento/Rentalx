import { Category } from "@modules/cars/infra/typeorm/entities/Category";

import {
  ICategoriesRepository,
  ICreateCategoriesDTO,
} from "../ICategoriesRepository";

class CreateCategoriesInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
  async list(): Promise<Category[]> {
    const { categories } = this;

    return categories;
  }
  async create({ name, description }: ICreateCategoriesDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }
}

export { CreateCategoriesInMemory };

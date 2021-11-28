import { Category } from "../entities/Category";

interface ICreateCategoriesDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoriesDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoriesDTO };

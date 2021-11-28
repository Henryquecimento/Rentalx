import { Category } from "../entities/Category";

interface ICreateCategoriesDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoriesDTO): void;
}

export { ICategoriesRepository, ICreateCategoriesDTO };

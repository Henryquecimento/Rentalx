import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoriesDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
    /* throw new Error("Method not implemented."); */
  }
  list(): Category[] {
    return null;
    /* throw new Error("Method not implemented."); */
  }
  create({ name, description }: ICreateCategoriesDTO): void {
    console.log(name, description);
  }
}

export { PostgresCategoriesRepository };

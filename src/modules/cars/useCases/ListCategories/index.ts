import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoryUseCases } from "./ListCategoriesUseCases";

const categoriesRepository = new CategoriesRepository();

const listCategoryUseCases = new ListCategoryUseCases(categoriesRepository);

const listCategoriesController = new ListCategoriesController(
  listCategoryUseCases
);

export { listCategoriesController };

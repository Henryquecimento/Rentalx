/* import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
 */
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoryUseCases } from "./ListCategoriesUseCases";

const categoriesRepository = null;

const listCategoryUseCases = new ListCategoryUseCases(categoriesRepository);

const listCategoriesController = new ListCategoriesController(
  listCategoryUseCases
);

export { listCategoriesController };

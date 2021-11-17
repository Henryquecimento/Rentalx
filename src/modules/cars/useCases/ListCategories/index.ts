import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoryUseCases } from "./ListCategoriesUseCases";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoryUseCases = new ListCategoryUseCases(categoriesRepository);

const listCategoriesController = new ListCategoriesController(
  listCategoryUseCases
);

export { listCategoriesController };

import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoriesController } from "./CreateCategoriesController";
import { CreateCategoryUseCases } from "./CreateCategoriesUseCases";

const categoriesRepository = new CategoriesRepository();

const createCategoryUseCases = new CreateCategoryUseCases(categoriesRepository);

const createCategoriesController = new CreateCategoriesController(
  createCategoryUseCases
);

export { createCategoriesController };

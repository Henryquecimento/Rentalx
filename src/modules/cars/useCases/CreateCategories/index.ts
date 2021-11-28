import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoriesController } from "./CreateCategoriesController";
import { CreateCategoryUseCases } from "./CreateCategoriesUseCases";

export default (): CreateCategoriesController => {
  const categoriesRepository = new CategoriesRepository();

  const createCategoryUseCases = new CreateCategoryUseCases(
    categoriesRepository
  );

  const createCategoriesController = new CreateCategoriesController(
    createCategoryUseCases
  );

  return createCategoriesController;
};

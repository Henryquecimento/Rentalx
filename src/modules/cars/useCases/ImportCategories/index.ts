/* import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
 */
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCases } from "./ImportCategoriesUseCases";

const categoriesRepository = null;

const importCategoriesUseCases = new ImportCategoriesUseCases(
  categoriesRepository
);

const importCategoriesController = new ImportCategoriesController(
  importCategoriesUseCases
);

export { importCategoriesController };

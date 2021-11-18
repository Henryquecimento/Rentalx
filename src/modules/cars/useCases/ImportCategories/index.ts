import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCases } from "./ImportCategoriesUseCases";

const importCategoriesUseCases = new ImportCategoriesUseCases();

const importCategoriesController = new ImportCategoriesController(
  importCategoriesUseCases
);

export { importCategoriesController };

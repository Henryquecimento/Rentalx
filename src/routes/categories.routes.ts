import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoriesController } from "../modules/cars/useCases/CreateCategories/index";

const CategoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

CategoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

CategoriesRoutes.post("/", (request, response) => {
  return createCategoriesController.handle(request, response);
});

export { CategoriesRoutes };

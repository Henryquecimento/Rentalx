import { Router } from "express";

import { createCategoriesController } from "../modules/cars/useCases/CreateCategories/index";
import { listCategoriesController } from "../modules/cars/useCases/ListCategories";

const CategoriesRoutes = Router();

CategoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

CategoriesRoutes.post("/", (request, response) => {
  return createCategoriesController.handle(request, response);
});

export { CategoriesRoutes };

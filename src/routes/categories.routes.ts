import { Router } from "express";
import multer from "multer";

import createCategoriesController from "../modules/cars/useCases/CreateCategories/index";
import { importCategoriesController } from "../modules/cars/useCases/ImportCategories";
import { listCategoriesController } from "../modules/cars/useCases/ListCategories";

const CategoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

CategoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

CategoriesRoutes.post("/", (request, response) => {
  return createCategoriesController().handle(request, response);
});

CategoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoriesController.handle(request, response);
});

export { CategoriesRoutes };

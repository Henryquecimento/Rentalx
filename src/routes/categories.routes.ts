import { Router } from "express";
import multer from "multer";

import { CreateCategoriesController } from "../modules/cars/useCases/CreateCategories/CreateCategoriesController";
import { importCategoriesController } from "../modules/cars/useCases/ImportCategories";
import { listCategoriesController } from "../modules/cars/useCases/ListCategories";

const CategoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoriesController = new CreateCategoriesController();

CategoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

CategoriesRoutes.post("/", createCategoriesController.handle);

CategoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoriesController.handle(request, response);
});

export { CategoriesRoutes };

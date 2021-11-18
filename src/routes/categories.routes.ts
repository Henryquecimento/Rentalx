import { Router } from "express";
import multer from "multer";

import { createCategoriesController } from "../modules/cars/useCases/CreateCategories/index";
import { listCategoriesController } from "../modules/cars/useCases/ListCategories";

const CategoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

CategoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

CategoriesRoutes.post("/", (request, response) => {
  return createCategoriesController.handle(request, response);
});

CategoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  const { file } = request;
  console.log(file);
  return response.send();
});

export { CategoriesRoutes };

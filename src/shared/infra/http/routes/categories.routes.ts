import { Router } from "express";
import multer from "multer";

import { CreateCategoriesController } from "@modules/cars/useCases/CreateCategories/CreateCategoriesController";
import { ImportCategoriesController } from "@modules/cars/useCases/ImportCategories/ImportCategoriesController";
import { ListCategoriesController } from "@modules/cars/useCases/ListCategories/ListCategoriesController";

const CategoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoriesController = new CreateCategoriesController();
const listCategoriesController = new ListCategoriesController();
const importCategoriesController = new ImportCategoriesController();

CategoriesRoutes.get("/", listCategoriesController.handle);

CategoriesRoutes.post("/", createCategoriesController.handle);

CategoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoriesController.handle
);

export { CategoriesRoutes };

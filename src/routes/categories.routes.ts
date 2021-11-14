import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoriesService";

const CategoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

CategoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

CategoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createRepositoryService = new CreateCategoryService(
    categoriesRepository
  );

  createRepositoryService.execute({ name, description });

  return response.status(201).send();
});

export { CategoriesRoutes };

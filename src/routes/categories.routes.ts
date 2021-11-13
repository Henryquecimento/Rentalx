import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoiesRepository";

const CategoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

CategoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({
    name,
    description,
  });

  return response.status(201).send();
});

export { CategoriesRoutes };

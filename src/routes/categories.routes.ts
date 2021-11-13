import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoiesRepository";

const CategoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

CategoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

CategoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists)
    return response.status(400).json({
      error: "Category already exists!",
    });

  categoriesRepository.create({
    name,
    description,
  });

  return response.status(201).send();
});

export { CategoriesRoutes };

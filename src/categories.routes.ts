import { Router } from "express";

const CategoriesRoutes = Router();

const categories = [];

CategoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body;

  categories.push({
    name,
    description
  });

  return response.status(201).json(categories);
});

export { CategoriesRoutes };
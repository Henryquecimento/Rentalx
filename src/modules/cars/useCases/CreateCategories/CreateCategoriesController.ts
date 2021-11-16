import { Request, Response } from "express";

import { CreateCategoryUseCases } from "./CreateCategoriesUseCases";

class CreateCategoriesController {
  constructor(private createCategoriesUseCases: CreateCategoryUseCases) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createCategoriesUseCases.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoriesController };

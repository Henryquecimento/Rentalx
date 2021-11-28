import { Request, Response } from "express";

import { CreateCategoryUseCases } from "./CreateCategoriesUseCases";

class CreateCategoriesController {
  constructor(private createCategoriesUseCases: CreateCategoryUseCases) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    try {
      await this.createCategoriesUseCases.execute({ name, description });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: "Category already exists!" });
    }
  }
}

export { CreateCategoriesController };

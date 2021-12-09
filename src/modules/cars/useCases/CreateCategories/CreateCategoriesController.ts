import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCases } from "./CreateCategoriesUseCases";

class CreateCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createCategoriesUseCases = container.resolve(CreateCategoryUseCases);

    await createCategoriesUseCases.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoriesController };

import { Request, Response } from "express";

import { ListCategoryUseCases } from "./ListCategoriesUseCases";

class ListCategoriesController {
  constructor(private listCategoriesUseCases: ListCategoryUseCases) {}

  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCases.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };

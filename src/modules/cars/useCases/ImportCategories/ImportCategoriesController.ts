import { Request, Response } from "express";

import { ImportCategoriesUseCases } from "./ImportCategoriesUseCases";

class ImportCategoriesController {
  constructor(private importCategoriesUseCases: ImportCategoriesUseCases) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoriesUseCases.execute(file);

    return response.send();
  }
}

export { ImportCategoriesController };

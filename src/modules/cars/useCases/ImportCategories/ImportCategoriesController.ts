import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoriesUseCases } from "./ImportCategoriesUseCases";

class ImportCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importCategoriesUseCases = container.resolve(
      ImportCategoriesUseCases
    );

    await importCategoriesUseCases.execute(file);

    return response.send();
  }
}

export { ImportCategoriesController };

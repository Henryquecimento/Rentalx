import { Request, Response } from "express";

import { CreateSpecificationsUseCases } from "./CreateSpecificationsUseCases";

class CreateSpecificationsController {
  constructor(
    private createSpecificationsUseCases: CreateSpecificationsUseCases
  ) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationsUseCases.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationsController };

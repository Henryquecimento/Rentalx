import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationsUseCases } from "./CreateSpecificationsUseCases";

class CreateSpecificationsController {
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const createSpecificationsUseCases = container.resolve(
      CreateSpecificationsUseCases
    );

    createSpecificationsUseCases.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationsController };

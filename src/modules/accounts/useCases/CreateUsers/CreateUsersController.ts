import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUsersUseCases } from "./CreateUsersUseCases";

class CreateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driver_license } = request.body;

    try {
      const createUsersUseCases = container.resolve(CreateUsersUseCases);

      await createUsersUseCases.execute({
        name,
        email,
        password,
        driver_license,
      });

      return response.status(201).send();
    } catch (error) {
      return response.json(500).json({ error: "Users already exists" });
    }
  }
}

export { CreateUsersController };

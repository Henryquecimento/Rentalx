import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarsSpecificationsUseCase } from "./CreateCarsSpecificationsUseCase";

class CreateCarsSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { specification_id } = request.body;

    const createCarsSpecificationsUseCase = container.resolve(
      CreateCarsSpecificationsUseCase
    );

    const cars = await createCarsSpecificationsUseCase.execute({
      car_id: id,
      specification_id,
    });

    return response.status(201).json(cars);
  }
}

export { CreateCarsSpecificationsController };

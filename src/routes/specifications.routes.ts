import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationsService } from "../modules/cars/services/CreateSpecificationsServices";

const SpecificationsRoutes = Router();

const specificationsRepository = new SpecificationRepository();

SpecificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationsService = new CreateSpecificationsService(
    specificationsRepository
  );

  createSpecificationsService.execute({ name, description });

  return response.status(201).send();
});

export { SpecificationsRoutes };

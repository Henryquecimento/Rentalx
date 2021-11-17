import { Router } from "express";

import { createSpecificationsController } from "../modules/cars/useCases/CreateSpecifications";

const SpecificationsRoutes = Router();

SpecificationsRoutes.post("/", (request, response) => {
  return createSpecificationsController.handle(request, response);
});

export { SpecificationsRoutes };

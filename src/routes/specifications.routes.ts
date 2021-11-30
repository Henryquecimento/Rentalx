import { Router } from "express";

import { CreateSpecificationsController } from "../modules/cars/useCases/CreateSpecifications/CreateSpecificationsController";

const SpecificationsRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();

SpecificationsRoutes.post("/", createSpecificationsController.handle);

export { SpecificationsRoutes };

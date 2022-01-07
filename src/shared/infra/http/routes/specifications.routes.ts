import { Router } from "express";

import { CreateSpecificationsController } from "@modules/cars/useCases/CreateSpecifications/CreateSpecificationsController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const SpecificationsRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();

SpecificationsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationsController.handle
);

export { SpecificationsRoutes };

import { Router } from "express";

import { CreateCarsController } from "@modules/cars/useCases/CreateCars/CreateCarsController";
import { CreateCarsSpecificationsController } from "@modules/cars/useCases/CreateCarsSpecifications/CreateCarsSpecificationsController";
import { ListAvailableCarsController } from "@modules/cars/useCases/ListAvailableCars/ListAvailableCarsController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const CarsRoutes = Router();

const createCarsController = new CreateCarsController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarsSpecificationsController =
  new CreateCarsSpecificationsController();

CarsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarsController.handle
);

CarsRoutes.get("/available", listAvailableCarsController.handle);

CarsRoutes.post(
  "/specifications/:id",
  ensureAuthenticated,
  ensureAdmin,
  createCarsSpecificationsController.handle
);
export { CarsRoutes };

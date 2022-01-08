import { Router } from "express";

import { CreateCarsController } from "@modules/cars/useCases/CreateCars/CreateCarsController";
import { ListAvailableCarsController } from "@modules/cars/useCases/ListAvailableCars/ListAvailableCarsController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const CarsRoutes = Router();

const createCarsController = new CreateCarsController();
const listAvailableCarsController = new ListAvailableCarsController();

CarsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarsController.handle
);

CarsRoutes.get("/available", listAvailableCarsController.handle);

export { CarsRoutes };

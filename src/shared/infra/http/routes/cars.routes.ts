import { Router } from "express";

import { CreateCarsController } from "@modules/cars/useCases/CreateCars/CreateCarsController";

const CarsRoutes = Router();

const createCarsController = new CreateCarsController();

CarsRoutes.post("/", createCarsController.handle);

export { CarsRoutes };

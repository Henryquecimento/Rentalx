import { Router } from "express";

import { CreateRentalsController } from "@modules/rentals/UseCases/CreateRentals/CreateRentalsController";
import { DevolutionRentalController } from "@modules/rentals/UseCases/DevolutionRental/DevolutionRentalController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const RentalRoutes = Router();

const createRentalsController = new CreateRentalsController();
const devolutionRentalController = new DevolutionRentalController();

RentalRoutes.post("/", ensureAuthenticated, createRentalsController.handle);
RentalRoutes.post(
  "/devolution/:id",
  ensureAuthenticated,
  devolutionRentalController.handle
);

export { RentalRoutes };

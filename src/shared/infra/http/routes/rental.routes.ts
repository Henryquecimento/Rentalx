import { Router } from "express";

import { CreateRentalsController } from "@modules/rentals/UseCases/CreateRentals/CreateRentalsController";
import { DevolutionRentalController } from "@modules/rentals/UseCases/DevolutionRental/DevolutionRentalController";
import { ListRentalsByUserController } from "@modules/rentals/UseCases/ListRentalsByUser/ListRentalsByUserController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const RentalRoutes = Router();

const createRentalsController = new CreateRentalsController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

RentalRoutes.post("/", ensureAuthenticated, createRentalsController.handle);
RentalRoutes.post(
  "/devolution/:id",
  ensureAuthenticated,
  devolutionRentalController.handle
);

RentalRoutes.get(
  "/user",
  ensureAuthenticated,
  listRentalsByUserController.handle
);

export { RentalRoutes };

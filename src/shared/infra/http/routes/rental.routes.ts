import { Router } from "express";

import { CreateRentalsController } from "@modules/rentals/UseCases/CreateRentals/CreateRentalsController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const RentalRoutes = Router();

const createRentalsController = new CreateRentalsController();

RentalRoutes.post("/", ensureAuthenticated, createRentalsController.handle);

export { RentalRoutes };

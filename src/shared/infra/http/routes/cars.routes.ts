import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateCarsController } from "@modules/cars/useCases/CreateCars/CreateCarsController";
import { CreateCarsSpecificationsController } from "@modules/cars/useCases/CreateCarsSpecifications/CreateCarsSpecificationsController";
import { ListAvailableCarsController } from "@modules/cars/useCases/ListAvailableCars/ListAvailableCarsController";
import { UploadCarsImagesController } from "@modules/cars/useCases/UploadCarsImages/UploadCarsImagesController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const CarsRoutes = Router();

const createCarsController = new CreateCarsController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarsSpecificationsController =
  new CreateCarsSpecificationsController();
const uploadCarsImagesController = new UploadCarsImagesController();

const upload = multer(uploadConfig);

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

CarsRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  ensureAdmin,
  upload.array("images"),
  uploadCarsImagesController.handle
);

export { CarsRoutes };

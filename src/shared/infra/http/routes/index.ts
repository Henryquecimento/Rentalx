import { Router } from "express";

import { AuthenticateRoutes } from "./authenticate.routes";
import { CarsRoutes } from "./cars.routes";
import { CategoriesRoutes } from "./categories.routes";
import { SpecificationsRoutes } from "./specifications.routes";
import { UsersRoutes } from "./users.routes";

const router = Router();

router.use("/sessions", AuthenticateRoutes);
router.use("/users", UsersRoutes);
router.use("/categories", CategoriesRoutes);
router.use("/specifications", SpecificationsRoutes);
router.use("/cars", CarsRoutes);

export { router };

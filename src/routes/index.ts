import { Router } from "express";

import { CategoriesRoutes } from "./categories.routes";
import { SpecificationsRoutes } from "./specifications.routes";
import { UsersRoutes } from "./users.routes";

const router = Router();

router.use("/users", UsersRoutes);
router.use("/categories", CategoriesRoutes);
router.use("/specifications", SpecificationsRoutes);

export { router };

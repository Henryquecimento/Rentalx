import { Router } from "express";

import { CategoriesRoutes } from "./categories.routes";
import { SpecificationsRoutes } from "./specifications.routes";

const router = Router();

router.use("/categories", CategoriesRoutes);
router.use("/specifications", SpecificationsRoutes);

export { router };

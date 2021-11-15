import express from "express";

import { CategoriesRoutes } from "./routes/categories.routes";
import { SpecificationsRoutes } from "./routes/specifications.routes";

const app = express();

app.use(express.json());

app.use("/categories", CategoriesRoutes);
app.use("/specifications", SpecificationsRoutes);

app.listen(3333, () => console.log("Server is running!"));

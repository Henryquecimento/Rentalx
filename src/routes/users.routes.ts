import { Router } from "express";

import { CreateUsersController } from "../modules/accounts/useCases/CreateUsers/CreateUsersController";

const UsersRoutes = Router();

const createUsersController = new CreateUsersController();

UsersRoutes.post("/", createUsersController.handle);

export { UsersRoutes };

import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUsersController } from "@modules/accounts/useCases/CreateUsers/CreateUsersController";
import { ProfileUserController } from "@modules/accounts/useCases/ProfileUser/ProfileUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/UpdateUserAvatar/UpdateUserAvatarController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const UsersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUsersController = new CreateUsersController();

const updateUserAvatarController = new UpdateUserAvatarController();

const profileUserController = new ProfileUserController();

UsersRoutes.post("/", createUsersController.handle);

UsersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

UsersRoutes.get("/profile", ensureAuthenticated, profileUserController.handle);

export { UsersRoutes };

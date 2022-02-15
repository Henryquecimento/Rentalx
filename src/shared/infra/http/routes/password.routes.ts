import { Router } from "express";

import { ResetPasswordUserController } from "@modules/accounts/useCases/ResetPasswordUser/ResetPasswordUserController";
import { SendForgotPasswordMailController } from "@modules/accounts/useCases/SendForgotPasswordMail/SendForgotPasswordMailController";

const PasswordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const resetPasswordUserController = new ResetPasswordUserController();

PasswordRoutes.post("/forgot", sendForgotPasswordMailController.handle);
PasswordRoutes.post("/reset", resetPasswordUserController.handle);

export { PasswordRoutes };

import { Router } from "express";

import { SendForgotPasswordMailController } from "@modules/accounts/useCases/SendForgotPasswordMail/SendForgotPasswordMailController";

const PasswordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();

PasswordRoutes.post("/forgot", sendForgotPasswordMailController.handle);

export { PasswordRoutes };

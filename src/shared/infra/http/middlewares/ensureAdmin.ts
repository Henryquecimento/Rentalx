import { NextFunction, Request, Response } from "express";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request.user;

  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(user_id);

  if (!user.isAdmin) throw new AppError("User is not admin!");

  return next();
}

import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCases } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(request: Request, response: Response) {
    const { user_id, avatar_file } = request.body;

    const updateUserAvatarUseCases = container.resolve(
      UpdateUserAvatarUseCases
    );

    await updateUserAvatarUseCases.execute({ user_id, avatar_file });

    return response.status(201).send();
  }
}

export { UpdateUserAvatarController };

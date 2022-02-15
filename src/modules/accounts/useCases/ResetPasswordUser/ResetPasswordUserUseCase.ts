import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IDateProvider } from "@shared/containers/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  token: string;
  password: string;
}

@injectable()
class ResetPasswordUserUseCase {
  constructor(
    @inject("UsersTokensRepository")
    private usersTokensRepository: UsersTokensRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ token, password }: IRequest): Promise<void> {
    const usersToken = await this.usersTokensRepository.findByRefreshToken(
      token
    );

    if (!usersToken) throw new AppError("Token Invalid");

    if (
      this.dateProvider.compareIfBefore(
        usersToken.expires_date,
        this.dateProvider.dateNow()
      )
    ) {
      throw new AppError("Token Expired");
    }

    const user = await this.usersRepository.findById(usersToken.user_id);

    user.password = await hash(password, 8);

    await this.usersRepository.create(user);

    await this.usersTokensRepository.deleteById(usersToken.id);
  }
}

export { ResetPasswordUserUseCase };

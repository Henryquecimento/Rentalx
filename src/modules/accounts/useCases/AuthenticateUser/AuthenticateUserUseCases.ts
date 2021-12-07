import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCases {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new Error("Email or password is incorrect!");

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error("Email or password is incorrect!");

    const token = sign({}, "1baa845a2c8612cc3740141ee4c07683", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturning: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturning;
  }
}

export { AuthenticateUserUseCases };

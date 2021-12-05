import { getRepository, Repository } from "typeorm";

import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { Users } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  async create({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };

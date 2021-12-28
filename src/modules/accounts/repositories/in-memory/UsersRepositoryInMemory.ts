import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  Users: User[] = [];

  async create({
    name,
    email,
    password,
    driver_license,
  }: ICreateUsersDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
      driver_license,
    });

    this.Users.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    return this.Users.find((user) => user.email === email);
  }
  async findById(id: string): Promise<User> {
    return this.Users.find((user) => user.id === id);
  }
}

export { UsersRepositoryInMemory };

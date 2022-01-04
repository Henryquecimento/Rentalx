import { ICreateCarDto } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDto): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>
}

export { ICarsRepository };
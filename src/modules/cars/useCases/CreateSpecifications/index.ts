import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationsController } from "./CreateSpecificationsController";
import { CreateSpecificationsUseCases } from "./CreateSpecificationsUseCases";

const specificationsRepository = new SpecificationRepository();

const createSpecificationsUseCases = new CreateSpecificationsUseCases(
  specificationsRepository
);

const createSpecificationsController = new CreateSpecificationsController(
  createSpecificationsUseCases
);

export { createSpecificationsController };

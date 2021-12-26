import { AppError } from "../../../../errors/AppError";
import { CreateCategoriesInMemory } from "../../repositories/in-memory/CreateCategoriesInMemory";
import { CreateCategoryUseCase } from "./CreateCategoriesUseCase";

let createCategoriesUseCase: CreateCategoryUseCase;
let createCategoriesInMemory: CreateCategoriesInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    createCategoriesInMemory = new CreateCategoriesInMemory();
    createCategoriesUseCase = new CreateCategoryUseCase(
      createCategoriesInMemory
    );
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category Name",
      description: "Description name",
    };

    await createCategoriesUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const createdCategory = await createCategoriesInMemory.findByName(
      category.name
    );

    expect(createdCategory).toHaveProperty("id");
  });
  it("should not be able to create a new category with existent name", async () => {
    expect(async () => {
      const category = {
        name: "Category Name",
        description: "Description name",
      };

      await createCategoriesUseCase.execute({
        name: category.name,
        description: category.description,
      });

      await createCategoriesUseCase.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});

import { CreateCategoriesInMemory } from "@modules/cars/repositories/in-memory/CreateCategoriesInMemory";
import { AppError } from "@shared/errors/AppError";

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
    const category = {
      name: "Category Name",
      description: "Description name",
    };

    await createCategoriesUseCase.execute({
      name: category.name,
      description: category.description,
    });
    await expect(
      createCategoriesUseCase.execute({
        name: category.name,
        description: category.description,
      })
    ).rejects.toEqual(new AppError("Category already exists!"));
  });
});

import { hash } from "bcryptjs";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";

import { app } from "@shared/infra/http/app";
import createConnection from "@shared/infra/typeorm";

let connection: Connection;

describe("Create Category Controller", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuid();
    const password = await hash("admin", 8);

    await connection.query(`INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
      values('${id}', 'admin', 'admin@admin.com', '${password}', true, 'now()', 'xxx-xxxx')
    `);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to create a new category", async () => {
    const responseSession = await request(app).post("/sessions").send({
      email: "admin@admin.com",
      password: "admin",
    });

    const { refresh_token } = responseSession.body;

    const response = await request(app)
      .post("/categories")
      .send({
        name: "Category Supertest",
        description: "Category Supertest",
      })
      .set("Authorization", `Bearer ${refresh_token}`);

    expect(response.status).toBe(201);
  });

  it("Should not be able to create a new category with existent name", async () => {
    const responseSession = await request(app).post("/sessions").send({
      email: "admin@admin.com",
      password: "admin",
    });

    const { refresh_token } = responseSession.body;

    const response = await request(app)
      .post("/categories")
      .send({
        name: "Category Supertest",
        description: "Category Supertest",
      })
      .set("Authorization", `Bearer ${refresh_token}`);

    expect(response.status).toBe(400);
  });
});

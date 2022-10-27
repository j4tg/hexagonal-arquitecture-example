import { mock } from "jest-mock-extended";
import request from "supertest";
import { container } from "tsyringe";
import { CreateBooking } from "../../../src/application/CreateBooking";
import { createApp } from "../../../src/infrastructure/http/app";

test("Deberia invocar caso de uso de creación de reserva", async () => {
  // Arrange
  const usecase = mock<CreateBooking>();
  const scope = container.createChildContainer();
  scope.registerInstance(CreateBooking, usecase);
  const app = createApp(scope);

  // Act
  const response = await request(app).post("/booking").send({
    date: "2021-01-01",
    email: "test@test.com",
  });

  // Assert
  expect(usecase.execute).toHaveBeenCalledWith({
    date: "2021-01-01",
    email: "test@test.com",
  });
  expect(response.status).toBe(204);
});

import { MySqlBookingRepository } from "../../../../src/infrastructure/adapters/persistence/MySqlBookingRepository";

test("Deberia insertar registro en la tabla de reservas", async () => {
  // Arrange
  const repository = new MySqlBookingRepository();

  // Act
  await repository.create({
    id: "1",
    date: "2021-01-01",
    email: "test@test.com",
  });
  // const rows = mysql.query("SELECT * FROM bookings WHERE id = 1")

  // Assert
  // expect(rows).toHaveLength(1)
  // expect(rows[0].id).toEqual("1")
  // expect(rows[0].date).toEqual("2021-01-01")
  // expect(rows[0].email).toEqual("test@test.com")
});

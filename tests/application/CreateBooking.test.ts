import { mock } from "jest-mock-extended";
import { CreateBooking } from "../../src/application/CreateBooking";
import { Mailer } from "../../src/domain/ports/Mailer";
import { UniqueId } from "../../src/domain/ports/UniqueId";
import { BookingRepository } from "../../src/domain/repositories/BookingRepository";

test("Deberia crear una reserva", async () => {
  // Arrange
  const uniqueId = mock<UniqueId>();
  const bookingRepository = mock<BookingRepository>();
  const mailer = mock<Mailer>();

  uniqueId.generate.mockReturnValue("123");
  const usecase = new CreateBooking(bookingRepository, uniqueId, mailer);

  // Act
  await usecase.execute({
    date: "2021-01-01",
    email: "jorge.tolentino@continuum.cl",
  });

  // Assert
  expect(uniqueId.generate).toHaveBeenCalled();
  expect(bookingRepository.create).toHaveBeenCalledWith({
    id: "123",
    date: "2021-01-01",
    email: "jorge.tolentino@continuum.cl",
  });
  expect(mailer.send).toHaveBeenCalledWith({
    to: "jorge.tolentino@continuum.cl",
    subject: "Reserva creada",
    body: "Tu reserva de el 2021-01-01 ha sido creada",
  });
});

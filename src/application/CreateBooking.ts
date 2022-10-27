import { Booking } from "../domain/entities/Booking";
import { Mailer } from "../domain/ports/Mailer";
import { UniqueId } from "../domain/ports/UniqueId";
import { BookingRepository } from "../domain/repositories/BookingRepository";

export class CreateBooking {
  constructor(
    private bookingRepository: BookingRepository,
    private uniqueId: UniqueId,
    private mailer: Mailer
  ) {}

  async execute(data: { date: string; email: string }): Promise<void> {
    const booking: Booking = {
      id: this.uniqueId.generate(),
      date: data.date,
      email: data.email,
    };

    await this.bookingRepository.create(booking);

    await this.mailer.send({
      to: booking.email,
      subject: "Reserva creada",
      body: `Tu reserva de el ${booking.date} ha sido creada`,
    });
  }
}

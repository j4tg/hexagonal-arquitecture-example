import { inject, injectable } from "tsyringe";
import { Booking } from "../domain/entities/Booking";
import { Mailer } from "../domain/ports/Mailer";
import { UniqueId } from "../domain/ports/UniqueId";
import { BookingRepository } from "../domain/repositories/BookingRepository";

@injectable()
export class CreateBooking {
  constructor(
    @inject("BookingRepository")
    private bookingRepository: BookingRepository,
    @inject("UniqueId")
    private uniqueId: UniqueId,
    @inject("Mailer")
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

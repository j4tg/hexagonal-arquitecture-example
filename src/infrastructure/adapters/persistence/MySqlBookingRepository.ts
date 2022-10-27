import { injectable } from "tsyringe";
import { Booking } from "../../../domain/entities/Booking";
import { BookingRepository } from "../../../domain/repositories/BookingRepository";

@injectable()
export class MySqlBookingRepository implements BookingRepository {
  async create(booking: Booking): Promise<void> {
    console.log("Reserva creada con mysql", booking);
  }
}

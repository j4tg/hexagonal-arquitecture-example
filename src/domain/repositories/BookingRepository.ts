import { Booking } from "../entities/Booking";

export interface BookingRepository {
  create(booking: Booking): Promise<void>;
}

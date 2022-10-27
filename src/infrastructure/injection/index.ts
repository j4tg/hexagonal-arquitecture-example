import "reflect-metadata";
import { container } from "tsyringe";
import { Mailer } from "../../domain/ports/Mailer";
import { UniqueId } from "../../domain/ports/UniqueId";
import { BookingRepository } from "../../domain/repositories/BookingRepository";
import { SengridMailer } from "../adapters/mailer/SengridMailer";
import { MySqlBookingRepository } from "../adapters/persistence/MySqlBookingRepository";
import { TimestampUniqueId } from "../adapters/unique-id/TimestampUniqueId";

container.register<BookingRepository>(
  "BookingRepository",
  MySqlBookingRepository
);
container.register<Mailer>("Mailer", SengridMailer);
container.register<UniqueId>("UniqueId", TimestampUniqueId);

export { container };

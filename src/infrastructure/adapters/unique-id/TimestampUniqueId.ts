import { injectable } from "tsyringe";
import { UniqueId } from "../../../domain/ports/UniqueId";

@injectable()
export class TimestampUniqueId implements UniqueId {
  generate(): string {
    return new Date().getTime().toString();
  }
}

import { UniqueId } from "../../../domain/ports/UniqueId";

export class UuidUniqueId implements UniqueId {
  generate(): string {
    return ""; // uuidv4();
  }
}

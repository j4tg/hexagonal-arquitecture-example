import { injectable } from "tsyringe";
import { UniqueId } from "../../../domain/ports/UniqueId";
import { v4 as uuidv4 } from "uuid";

@injectable()
export class UuidUniqueId implements UniqueId {
  generate(): string {
    return uuidv4();
  }
}

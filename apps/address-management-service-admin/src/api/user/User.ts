import { AddressBook } from "../addressBook/AddressBook";
import { Address } from "../address/Address";
import { JsonValue } from "type-fest";

export type User = {
  addressBooks?: Array<AddressBook>;
  addresses?: Array<Address>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  temporaryField: string | null;
  updatedAt: Date;
  username: string;
};

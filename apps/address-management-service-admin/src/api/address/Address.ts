import { AddressBook } from "../addressBook/AddressBook";
import { User } from "../user/User";

export type Address = {
  addressBooks?: Array<AddressBook>;
  city: string | null;
  country: string | null;
  createdAt: Date;
  googleMapsLink: string | null;
  id: string;
  label: string | null;
  postalCode: string | null;
  state: string | null;
  street: string | null;
  updatedAt: Date;
  user?: User | null;
};

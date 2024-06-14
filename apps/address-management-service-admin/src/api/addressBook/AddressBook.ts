import { Address } from "../address/Address";
import { User } from "../user/User";

export type AddressBook = {
  address?: Address | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};

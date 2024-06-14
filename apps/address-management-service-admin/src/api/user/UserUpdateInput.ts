import { AddressBookUpdateManyWithoutUsersInput } from "./AddressBookUpdateManyWithoutUsersInput";
import { AddressUpdateManyWithoutUsersInput } from "./AddressUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  addressBooks?: AddressBookUpdateManyWithoutUsersInput;
  addresses?: AddressUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  temporaryField?: string | null;
  username?: string;
};

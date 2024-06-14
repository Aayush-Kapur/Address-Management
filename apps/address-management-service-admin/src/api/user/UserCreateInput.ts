import { AddressBookCreateNestedManyWithoutUsersInput } from "./AddressBookCreateNestedManyWithoutUsersInput";
import { AddressCreateNestedManyWithoutUsersInput } from "./AddressCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  addressBooks?: AddressBookCreateNestedManyWithoutUsersInput;
  addresses?: AddressCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  temporaryField?: string | null;
  username: string;
};

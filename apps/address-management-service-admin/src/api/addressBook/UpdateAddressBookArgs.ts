import { AddressBookWhereUniqueInput } from "./AddressBookWhereUniqueInput";
import { AddressBookUpdateInput } from "./AddressBookUpdateInput";

export type UpdateAddressBookArgs = {
  where: AddressBookWhereUniqueInput;
  data: AddressBookUpdateInput;
};

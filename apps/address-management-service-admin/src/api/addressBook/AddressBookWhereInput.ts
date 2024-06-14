import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressBookWhereInput = {
  address?: AddressWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};

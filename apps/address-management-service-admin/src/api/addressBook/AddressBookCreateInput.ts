import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressBookCreateInput = {
  address?: AddressWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

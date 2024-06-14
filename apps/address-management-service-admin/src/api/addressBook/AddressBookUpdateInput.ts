import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressBookUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

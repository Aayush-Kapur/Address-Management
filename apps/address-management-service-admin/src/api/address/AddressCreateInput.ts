import { AddressBookCreateNestedManyWithoutAddressesInput } from "./AddressBookCreateNestedManyWithoutAddressesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressCreateInput = {
  addressBooks?: AddressBookCreateNestedManyWithoutAddressesInput;
  city?: string | null;
  country?: string | null;
  googleMapsLink?: string | null;
  label?: string | null;
  postalCode?: string | null;
  state?: string | null;
  street?: string | null;
  user?: UserWhereUniqueInput | null;
};

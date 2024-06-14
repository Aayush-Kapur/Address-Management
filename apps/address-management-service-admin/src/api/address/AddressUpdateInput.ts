import { AddressBookUpdateManyWithoutAddressesInput } from "./AddressBookUpdateManyWithoutAddressesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressUpdateInput = {
  addressBooks?: AddressBookUpdateManyWithoutAddressesInput;
  city?: string | null;
  country?: string | null;
  googleMapsLink?: string | null;
  label?: string | null;
  postalCode?: string | null;
  state?: string | null;
  street?: string | null;
  user?: UserWhereUniqueInput | null;
};

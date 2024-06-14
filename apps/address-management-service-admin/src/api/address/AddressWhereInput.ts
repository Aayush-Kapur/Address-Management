import { AddressBookListRelationFilter } from "../addressBook/AddressBookListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressWhereInput = {
  addressBooks?: AddressBookListRelationFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  googleMapsLink?: StringNullableFilter;
  id?: StringFilter;
  label?: StringNullableFilter;
  postalCode?: StringNullableFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};

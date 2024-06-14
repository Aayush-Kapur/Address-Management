import { AddressBookListRelationFilter } from "../addressBook/AddressBookListRelationFilter";
import { AddressListRelationFilter } from "../address/AddressListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  addressBooks?: AddressBookListRelationFilter;
  addresses?: AddressListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  temporaryField?: StringNullableFilter;
  username?: StringFilter;
};

import { SortOrder } from "../../util/SortOrder";

export type AddressBookOrderByInput = {
  addressId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

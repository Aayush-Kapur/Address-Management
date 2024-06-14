import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  googleMapsLink?: SortOrder;
  id?: SortOrder;
  label?: SortOrder;
  postalCode?: SortOrder;
  state?: SortOrder;
  street?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

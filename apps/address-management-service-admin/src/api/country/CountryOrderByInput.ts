import { SortOrder } from "../../util/SortOrder";

export type CountryOrderByInput = {
  countryCode?: SortOrder;
  countryName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type StateOrderByInput = {
  countryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  stateName?: SortOrder;
  updatedAt?: SortOrder;
};

import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";

export type StateUpdateInput = {
  country?: CountryWhereUniqueInput | null;
  stateName?: string | null;
};

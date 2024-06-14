import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";

export type StateCreateInput = {
  country?: CountryWhereUniqueInput | null;
  stateName?: string | null;
};

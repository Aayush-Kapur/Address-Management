import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StateWhereInput = {
  country?: CountryWhereUniqueInput;
  id?: StringFilter;
  stateName?: StringNullableFilter;
};

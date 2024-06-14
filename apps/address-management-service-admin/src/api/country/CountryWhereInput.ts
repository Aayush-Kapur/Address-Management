import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StateListRelationFilter } from "../state/StateListRelationFilter";

export type CountryWhereInput = {
  countryCode?: StringNullableFilter;
  countryName?: StringNullableFilter;
  id?: StringFilter;
  states?: StateListRelationFilter;
};

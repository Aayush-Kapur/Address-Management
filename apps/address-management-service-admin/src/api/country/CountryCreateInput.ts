import { StateCreateNestedManyWithoutCountriesInput } from "./StateCreateNestedManyWithoutCountriesInput";

export type CountryCreateInput = {
  countryCode?: string | null;
  countryName?: string | null;
  states?: StateCreateNestedManyWithoutCountriesInput;
};

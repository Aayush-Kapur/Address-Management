import { StateUpdateManyWithoutCountriesInput } from "./StateUpdateManyWithoutCountriesInput";

export type CountryUpdateInput = {
  countryCode?: string | null;
  countryName?: string | null;
  states?: StateUpdateManyWithoutCountriesInput;
};

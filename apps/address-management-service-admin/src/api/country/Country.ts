import { State } from "../state/State";

export type Country = {
  countryCode: string | null;
  countryName: string | null;
  createdAt: Date;
  id: string;
  states?: Array<State>;
  updatedAt: Date;
};

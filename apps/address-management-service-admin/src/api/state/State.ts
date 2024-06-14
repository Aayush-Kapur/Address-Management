import { Country } from "../country/Country";

export type State = {
  country?: Country | null;
  createdAt: Date;
  id: string;
  stateName: string | null;
  updatedAt: Date;
};

import { State as TState } from "../api/state/State";

export const STATE_TITLE_FIELD = "stateName";

export const StateTitle = (record: TState): string => {
  return record.stateName?.toString() || String(record.id);
};

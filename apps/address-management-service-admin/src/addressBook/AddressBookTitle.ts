import { AddressBook as TAddressBook } from "../api/addressBook/AddressBook";

export const ADDRESSBOOK_TITLE_FIELD = "id";

export const AddressBookTitle = (record: TAddressBook): string => {
  return record.id?.toString() || String(record.id);
};

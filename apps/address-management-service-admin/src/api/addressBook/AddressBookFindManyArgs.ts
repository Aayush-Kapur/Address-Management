import { AddressBookWhereInput } from "./AddressBookWhereInput";
import { AddressBookOrderByInput } from "./AddressBookOrderByInput";

export type AddressBookFindManyArgs = {
  where?: AddressBookWhereInput;
  orderBy?: Array<AddressBookOrderByInput>;
  skip?: number;
  take?: number;
};

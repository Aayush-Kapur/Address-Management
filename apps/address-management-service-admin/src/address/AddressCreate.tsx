import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AddressBookTitle } from "../addressBook/AddressBookTitle";
import { UserTitle } from "../user/UserTitle";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="addressBooks"
          reference="AddressBook"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AddressBookTitle} />
        </ReferenceArrayInput>
        <TextInput label="city" source="city" />
        <TextInput label="country" source="country" />
        <TextInput label="googleMapsLink" source="googleMapsLink" />
        <TextInput label="label" source="label" />
        <TextInput label="postalCode" source="postalCode" />
        <TextInput label="state" source="state" />
        <TextInput label="street" source="street" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

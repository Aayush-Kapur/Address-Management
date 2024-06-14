import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { StateTitle } from "../state/StateTitle";

export const CountryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="countryCode" source="countryCode" />
        <TextInput label="countryName" source="countryName" />
        <ReferenceArrayInput
          source="states"
          reference="State"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StateTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

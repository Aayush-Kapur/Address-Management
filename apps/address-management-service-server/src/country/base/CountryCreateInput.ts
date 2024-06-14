/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { StateCreateNestedManyWithoutCountriesInput } from "./StateCreateNestedManyWithoutCountriesInput";
import { Type } from "class-transformer";

@InputType()
class CountryCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  countryCode?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  countryName?: string | null;

  @ApiProperty({
    required: false,
    type: () => StateCreateNestedManyWithoutCountriesInput,
  })
  @ValidateNested()
  @Type(() => StateCreateNestedManyWithoutCountriesInput)
  @IsOptional()
  @Field(() => StateCreateNestedManyWithoutCountriesInput, {
    nullable: true,
  })
  states?: StateCreateNestedManyWithoutCountriesInput;
}

export { CountryCreateInput as CountryCreateInput };
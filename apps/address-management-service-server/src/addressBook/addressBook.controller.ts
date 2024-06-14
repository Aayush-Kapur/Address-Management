import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AddressBookService } from "./addressBook.service";
import { AddressBookControllerBase } from "./base/addressBook.controller.base";

@swagger.ApiTags("addressBooks")
@common.Controller("addressBooks")
export class AddressBookController extends AddressBookControllerBase {
  constructor(
    protected readonly service: AddressBookService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

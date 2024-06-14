import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AddressBookModuleBase } from "./base/addressBook.module.base";
import { AddressBookService } from "./addressBook.service";
import { AddressBookController } from "./addressBook.controller";
import { AddressBookResolver } from "./addressBook.resolver";

@Module({
  imports: [AddressBookModuleBase, forwardRef(() => AuthModule)],
  controllers: [AddressBookController],
  providers: [AddressBookService, AddressBookResolver],
  exports: [AddressBookService],
})
export class AddressBookModule {}

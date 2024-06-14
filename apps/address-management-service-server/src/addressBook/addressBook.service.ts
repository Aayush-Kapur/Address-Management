import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AddressBookServiceBase } from "./base/addressBook.service.base";

@Injectable()
export class AddressBookService extends AddressBookServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

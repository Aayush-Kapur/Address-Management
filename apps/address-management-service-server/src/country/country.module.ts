import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CountryModuleBase } from "./base/country.module.base";
import { CountryService } from "./country.service";
import { CountryController } from "./country.controller";
import { CountryResolver } from "./country.resolver";

@Module({
  imports: [CountryModuleBase, forwardRef(() => AuthModule)],
  controllers: [CountryController],
  providers: [CountryService, CountryResolver],
  exports: [CountryService],
})
export class CountryModule {}

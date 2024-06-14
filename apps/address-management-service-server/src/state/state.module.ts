import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StateModuleBase } from "./base/state.module.base";
import { StateService } from "./state.service";
import { StateController } from "./state.controller";
import { StateResolver } from "./state.resolver";

@Module({
  imports: [StateModuleBase, forwardRef(() => AuthModule)],
  controllers: [StateController],
  providers: [StateService, StateResolver],
  exports: [StateService],
})
export class StateModule {}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { StateService } from "../state.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { StateCreateInput } from "./StateCreateInput";
import { State } from "./State";
import { StateFindManyArgs } from "./StateFindManyArgs";
import { StateWhereUniqueInput } from "./StateWhereUniqueInput";
import { StateUpdateInput } from "./StateUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class StateControllerBase {
  constructor(
    protected readonly service: StateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: State })
  @nestAccessControl.UseRoles({
    resource: "State",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createState(@common.Body() data: StateCreateInput): Promise<State> {
    return await this.service.createState({
      data: {
        ...data,

        country: data.country
          ? {
              connect: data.country,
            }
          : undefined,
      },
      select: {
        country: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        stateName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [State] })
  @ApiNestedQuery(StateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "State",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async states(@common.Req() request: Request): Promise<State[]> {
    const args = plainToClass(StateFindManyArgs, request.query);
    return this.service.states({
      ...args,
      select: {
        country: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        stateName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: State })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "State",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async state(
    @common.Param() params: StateWhereUniqueInput
  ): Promise<State | null> {
    const result = await this.service.state({
      where: params,
      select: {
        country: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        stateName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: State })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "State",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateState(
    @common.Param() params: StateWhereUniqueInput,
    @common.Body() data: StateUpdateInput
  ): Promise<State | null> {
    try {
      return await this.service.updateState({
        where: params,
        data: {
          ...data,

          country: data.country
            ? {
                connect: data.country,
              }
            : undefined,
        },
        select: {
          country: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          stateName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: State })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "State",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteState(
    @common.Param() params: StateWhereUniqueInput
  ): Promise<State | null> {
    try {
      return await this.service.deleteState({
        where: params,
        select: {
          country: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          stateName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

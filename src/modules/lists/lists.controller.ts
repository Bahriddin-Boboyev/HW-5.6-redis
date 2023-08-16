/** @format */

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { IsLoggedIn } from "src/shared/guards/is-loggedin.guard";
import { CurrentUser } from "src/shared/decorators/current-user.decorator";
import { AppUser } from "src/shared/types/app-user";
import { ListsService } from "./lists.service";
import { AddListDto } from "./dto/add-list.dto";
import { EditListDto } from "./dto/edit-list.dto";
import { SetCacheKey } from "src/shared/decorators/set-cache-keydecorator";

@UseGuards(IsLoggedIn)
@Controller("lists")
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Post()
  postList(@CurrentUser() user: AppUser, @Body() dto: AddListDto) {
    return this.listsService.add({ ...dto, user: user.id });
  }

  @SetCacheKey((req) => `lists:${req["user"].id}:${req.query}`)
  @Get()
  getLists(@CurrentUser() user: AppUser) {
    return this.listsService.list({ filters: { user: user.id } });
  }

  @SetCacheKey((req) => `list:${req["user"].id}:${req.query}`)
  @Get(":id")
  getList(@Param("id") id: string, @CurrentUser() user: AppUser) {
    return this.listsService.show({ id, user: user.id });
  }

  @Patch(":id")
  patchList(
    @Param("id") id: string,
    @CurrentUser() user: AppUser,
    @Body() dto: EditListDto,
  ) {
    return this.listsService.edit({ id, user: user.id }, dto);
  }

  @Delete(":id")
  deleteList(@Param("id") id: string, @CurrentUser() user: AppUser) {
    return this.listsService.remove({ id, user: user.id });
  }
}

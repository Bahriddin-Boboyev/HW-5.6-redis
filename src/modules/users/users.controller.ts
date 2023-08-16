import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { AddUserDto } from "./dto/add-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { EditUserDto } from "./dto/edit-user.dto";
import { IsLoggedIn } from "src/shared/guards/is-loggedin.guard";
import { CurrentUser } from "src/shared/decorators/current-user.decorator";
import { AppUser } from "src/shared/types/app-user";
import { Inject } from "@nestjs/common";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Post("register")
  postRegisterUser(@Body() dto: AddUserDto) {
    return this.usersService.add(dto);
  }

  @Post("login")
  postLoginUser(@Body() dto: LoginUserDto) {
    return this.usersService.login(dto);
  }

  // @CacheTTL(1000)
  @UseGuards(IsLoggedIn)
  @Get("me")
  async getMe(@CurrentUser() user: AppUser) {
    const existInCache = await this.cacheManager.get(`user:${user.id}`);

    if (existInCache) {
      console.log("cache hit");
      console.log(existInCache);
      return existInCache;
    }

    const result = await this.usersService.show(user.id);

    console.log("cache miss");
    this.cacheManager.set(`user:${user.id}`, result, 1000);

    return result;
  }

  @UseGuards(IsLoggedIn)
  @Patch("me")
  patchMe(@CurrentUser() user: AppUser, @Body() dto: EditUserDto) {
    return this.usersService.edit(user.id, dto);
  }

  @UseGuards(IsLoggedIn)
  @Delete("me")
  deleteMe(@CurrentUser() user: AppUser) {
    return this.usersService.remove(user.id);
  }
}

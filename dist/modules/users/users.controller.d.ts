/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { UsersService } from "./users.service";
import { AddUserDto } from "./dto/add-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { EditUserDto } from "./dto/edit-user.dto";
import { AppUser } from "src/shared/types/app-user";
import { Cache } from "cache-manager";
export declare class UsersController {
    private readonly usersService;
    private cacheManager;
    constructor(usersService: UsersService, cacheManager: Cache);
    postRegisterUser(dto: AddUserDto): Promise<import("mongoose").Document<unknown, {}, import("./User").User> & import("./User").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    postLoginUser(dto: LoginUserDto): Promise<{
        token: string;
    }>;
    getMe(user: AppUser): Promise<unknown>;
    patchMe(user: AppUser, dto: EditUserDto): Promise<import("mongoose").Document<unknown, {}, import("./User").User> & import("./User").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteMe(user: AppUser): Promise<import("mongoose").Document<unknown, {}, import("./User").User> & import("./User").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const add_user_dto_1 = require("./dto/add-user.dto");
const login_user_dto_1 = require("./dto/login-user.dto");
const edit_user_dto_1 = require("./dto/edit-user.dto");
const is_loggedin_guard_1 = require("../../shared/guards/is-loggedin.guard");
const current_user_decorator_1 = require("../../shared/decorators/current-user.decorator");
const common_2 = require("@nestjs/common");
const cache_manager_1 = require("@nestjs/cache-manager");
let UsersController = exports.UsersController = class UsersController {
    constructor(usersService, cacheManager) {
        this.usersService = usersService;
        this.cacheManager = cacheManager;
    }
    postRegisterUser(dto) {
        return this.usersService.add(dto);
    }
    postLoginUser(dto) {
        return this.usersService.login(dto);
    }
    async getMe(user) {
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
    patchMe(user, dto) {
        return this.usersService.edit(user.id, dto);
    }
    deleteMe(user) {
        return this.usersService.remove(user.id);
    }
};
__decorate([
    (0, common_1.Post)("register"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_user_dto_1.AddUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "postRegisterUser", null);
__decorate([
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "postLoginUser", null);
__decorate([
    (0, common_1.UseGuards)(is_loggedin_guard_1.IsLoggedIn),
    (0, common_1.Get)("me"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMe", null);
__decorate([
    (0, common_1.UseGuards)(is_loggedin_guard_1.IsLoggedIn),
    (0, common_1.Patch)("me"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, edit_user_dto_1.EditUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "patchMe", null);
__decorate([
    (0, common_1.UseGuards)(is_loggedin_guard_1.IsLoggedIn),
    (0, common_1.Delete)("me"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteMe", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)("users"),
    __param(1, (0, common_2.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [users_service_1.UsersService, Object])
], UsersController);
//# sourceMappingURL=users.controller.js.map
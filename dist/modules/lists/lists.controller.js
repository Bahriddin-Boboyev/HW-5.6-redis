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
exports.ListsController = void 0;
const common_1 = require("@nestjs/common");
const is_loggedin_guard_1 = require("../../shared/guards/is-loggedin.guard");
const current_user_decorator_1 = require("../../shared/decorators/current-user.decorator");
const lists_service_1 = require("./lists.service");
const add_list_dto_1 = require("./dto/add-list.dto");
const edit_list_dto_1 = require("./dto/edit-list.dto");
const set_cache_keydecorator_1 = require("../../shared/decorators/set-cache-keydecorator");
let ListsController = exports.ListsController = class ListsController {
    constructor(listsService) {
        this.listsService = listsService;
    }
    postList(user, dto) {
        return this.listsService.add({ ...dto, user: user.id });
    }
    getLists(user) {
        return this.listsService.list({ filters: { user: user.id } });
    }
    getList(id, user) {
        return this.listsService.show({ id, user: user.id });
    }
    patchList(id, user, dto) {
        return this.listsService.edit({ id, user: user.id }, dto);
    }
    deleteList(id, user) {
        return this.listsService.remove({ id, user: user.id });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, add_list_dto_1.AddListDto]),
    __metadata("design:returntype", void 0)
], ListsController.prototype, "postList", null);
__decorate([
    (0, set_cache_keydecorator_1.SetCacheKey)((req) => `lists:${req["user"].id}:${req.query}`),
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ListsController.prototype, "getLists", null);
__decorate([
    (0, set_cache_keydecorator_1.SetCacheKey)((req) => `list:${req["user"].id}:${req.query}`),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ListsController.prototype, "getList", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, edit_list_dto_1.EditListDto]),
    __metadata("design:returntype", void 0)
], ListsController.prototype, "patchList", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ListsController.prototype, "deleteList", null);
exports.ListsController = ListsController = __decorate([
    (0, common_1.UseGuards)(is_loggedin_guard_1.IsLoggedIn),
    (0, common_1.Controller)("lists"),
    __metadata("design:paramtypes", [lists_service_1.ListsService])
], ListsController);
//# sourceMappingURL=lists.controller.js.map
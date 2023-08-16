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
exports.TodosController = void 0;
const common_1 = require("@nestjs/common");
const is_loggedin_guard_1 = require("../../shared/guards/is-loggedin.guard");
const current_user_decorator_1 = require("../../shared/decorators/current-user.decorator");
const todos_service_1 = require("./todos.service");
const add_todo_dto_1 = require("./dto/add-todo.dto");
const edit_todo_dto_1 = require("./dto/edit-todo.dto");
const set_cache_keydecorator_1 = require("../../shared/decorators/set-cache-keydecorator");
const http_interceptor_1 = require("../../shared/interceptors/http-interceptor");
let TodosController = exports.TodosController = class TodosController {
    constructor(todosService) {
        this.todosService = todosService;
    }
    postTodo(dto, user) {
        return this.todosService.add({ ...dto, user: user.id });
    }
    getTodos(user) {
        console.log("cache miss");
        return this.todosService.list({ filters: { user: user.id } });
    }
    getTodo(id, user) {
        return this.todosService.show({ id, user: user.id });
    }
    patchTodo(id, user, dto) {
        return this.todosService.edit({ id, user: user.id }, dto);
    }
    deleteTodo(id, user) {
        return this.todosService.remove({ id, user: user.id });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_todo_dto_1.AddTodoDto, Object]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "postTodo", null);
__decorate([
    (0, set_cache_keydecorator_1.SetCacheKey)((req) => `todos:${req["user"].id}:${JSON.stringify(req.query)}`),
    (0, set_cache_keydecorator_1.SetCacheKey)((req) => `todos:${req["user"].id}`),
    (0, common_1.UseInterceptors)(http_interceptor_1.HttpCacheInterceptor),
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "getTodos", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "getTodo", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, edit_todo_dto_1.EditTodoDto]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "patchTodo", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "deleteTodo", null);
exports.TodosController = TodosController = __decorate([
    (0, common_1.UseGuards)(is_loggedin_guard_1.IsLoggedIn),
    (0, common_1.Controller)("todos"),
    __metadata("design:paramtypes", [todos_service_1.TodosService])
], TodosController);
//# sourceMappingURL=todos.controller.js.map
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
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const Todo_1 = require("./Todo");
const mongoose_2 = require("mongoose");
const List_1 = require("../lists/List");
let TodosService = exports.TodosService = class TodosService {
    constructor(todoModel, listModel) {
        this.todoModel = todoModel;
        this.listModel = listModel;
    }
    async add({ list, user, ...rest }) {
        const existingList = await this.listModel.findOne({ _id: list, user });
        if (!existingList) {
            throw new common_1.NotFoundException("List topilmadi.");
        }
        const result = await this.todoModel.create({ list, user, ...rest });
        existingList.todos.push(result.id);
        existingList.save();
        return result;
    }
    async list({ filters = {} }) {
        const lists = await this.todoModel.find({ ...filters, is_deleted: false });
        return lists;
    }
    async show({ id, user }) {
        const todo = await this.todoModel
            .findOne({
            _id: id,
            is_deleted: false,
            user,
        })
            .populate("list");
        if (!todo) {
            throw new common_1.NotFoundException("Todo topilmadi.");
        }
        return todo;
    }
    async edit({ id, user }, dto) {
        const existing = await this.todoModel.findOne({
            _id: id,
            is_deleted: false,
            user,
        });
        if (!existing) {
            throw new common_1.NotFoundException("Todo topilmadi.");
        }
        if (dto.list) {
            const existingList = await this.listModel.findOne({
                _id: dto.list,
                user,
            });
            if (!existingList) {
                throw new common_1.NotFoundException("List topilmadi.");
            }
        }
        return this.todoModel.findByIdAndUpdate(id, dto, { new: true });
    }
    async remove({ id, user }) {
        const existing = await this.todoModel.findOne({
            _id: id,
            is_deleted: false,
            user,
        });
        if (!existing) {
            throw new common_1.NotFoundException("Todo topilmadi.");
        }
        return this.todoModel.findByIdAndUpdate(id, { is_deleted: true });
    }
};
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Todo_1.Todo.name)),
    __param(1, (0, mongoose_1.InjectModel)(List_1.List.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], TodosService);
//# sourceMappingURL=todos.service.js.map
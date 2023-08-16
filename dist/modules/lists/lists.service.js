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
exports.ListsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const List_1 = require("./List");
let ListsService = exports.ListsService = class ListsService {
    constructor(listModel) {
        this.listModel = listModel;
    }
    async add(dto) {
        const result = await this.listModel.create(dto);
        return result;
    }
    async list({ filters = {} }) {
        const lists = await this.listModel.find({ ...filters, is_deleted: false });
        return lists;
    }
    async show({ id, user }) {
        const list = await this.listModel
            .findOne({ _id: id, is_deleted: false, user })
            .populate("todos");
        if (!list) {
            throw new common_1.NotFoundException("List topilmadi.");
        }
        return list;
    }
    async edit({ id, user }, dto) {
        const existing = await this.listModel.findOne({
            _id: id,
            is_deleted: false,
            user,
        });
        if (!existing) {
            throw new common_1.NotFoundException("List topilmadi.");
        }
        return this.listModel.findByIdAndUpdate(id, dto, { new: true });
    }
    async remove({ id, user }) {
        const existing = await this.listModel.findOne({
            _id: id,
            is_deleted: false,
            user,
        });
        if (!existing) {
            throw new common_1.NotFoundException("List topilmadi.");
        }
        return this.listModel.findByIdAndUpdate(id, { is_deleted: true });
    }
};
exports.ListsService = ListsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(List_1.List.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ListsService);
//# sourceMappingURL=lists.service.js.map
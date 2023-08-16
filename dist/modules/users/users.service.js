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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcryptjs");
const User_1 = require("./User");
let UsersService = exports.UsersService = class UsersService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async add(dto) {
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const result = await this.userModel.create({
            ...dto,
            password: hashedPassword,
        });
        return result;
    }
    async login({ username, password }) {
        const existing = await this.userModel.findOne({
            username,
            is_deleted: false,
        });
        if (!existing) {
            throw new common_1.UnauthorizedException("Incorrect username or password.");
        }
        const match = await bcrypt.compare(password, existing.password);
        if (!match) {
            throw new common_1.UnauthorizedException("Incorrect username or password.");
        }
        const token = this.jwtService.sign({ user: { id: existing._id } });
        return { token };
    }
    async show(id) {
        const user = await this.userModel.findOne({ _id: id, is_deleted: false });
        if (!user) {
            throw new common_1.NotFoundException("Foydalanuvchi topilmadi.");
        }
        return user;
    }
    async edit(id, dto) {
        const existing = await this.userModel.findOne({
            _id: id,
            is_deleted: false,
        });
        if (!existing) {
            throw new common_1.NotFoundException("Foydalanuvchi topilmadi.");
        }
        return this.userModel.findByIdAndUpdate(id, dto, { new: true });
    }
    async remove(id) {
        const existing = await this.userModel.findOne({
            _id: id,
            is_deleted: false,
        });
        if (!existing) {
            throw new common_1.NotFoundException("Foydalanuvchi topilmadi.");
        }
        return this.userModel.findByIdAndUpdate(id, {
            is_deleted: true,
            username: `${existing.username}_${Date.now()}_deleted`,
        });
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(User_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map
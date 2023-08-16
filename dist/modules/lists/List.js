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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSchema = exports.List = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let List = exports.List = class List {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], List.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], List.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    }),
    __metadata("design:type", String)
], List.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [mongoose_2.default.SchemaTypes.ObjectId],
        ref: "List",
        default: [],
    }),
    __metadata("design:type", Array)
], List.prototype, "todos", void 0);
exports.List = List = __decorate([
    (0, mongoose_1.Schema)({
        versionKey: false,
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    })
], List);
exports.ListSchema = mongoose_1.SchemaFactory.createForClass(List);
//# sourceMappingURL=List.js.map
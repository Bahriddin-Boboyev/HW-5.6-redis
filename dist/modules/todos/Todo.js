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
exports.TodoSchema = exports.Todo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Todo = exports.Todo = class Todo {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Todo.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Todo.prototype, "is_done", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Todo.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    }),
    __metadata("design:type", String)
], Todo.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.SchemaTypes.ObjectId,
        ref: "List",
        required: true,
    }),
    __metadata("design:type", String)
], Todo.prototype, "list", void 0);
exports.Todo = Todo = __decorate([
    (0, mongoose_1.Schema)({
        versionKey: false,
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    })
], Todo);
exports.TodoSchema = mongoose_1.SchemaFactory.createForClass(Todo);
//# sourceMappingURL=Todo.js.map
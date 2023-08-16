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
import { AppUser } from "src/shared/types/app-user";
import { TodosService } from "./todos.service";
import { AddTodoDto } from "./dto/add-todo.dto";
import { EditTodoDto } from "./dto/edit-todo.dto";
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    postTodo(dto: AddTodoDto, user: AppUser): Promise<import("mongoose").Document<unknown, {}, import("./Todo").Todo> & import("./Todo").Todo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getTodos(user: AppUser): Promise<(import("mongoose").Document<unknown, {}, import("./Todo").Todo> & import("./Todo").Todo & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getTodo(id: string, user: AppUser): Promise<import("mongoose").Document<unknown, {}, import("./Todo").Todo> & import("./Todo").Todo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    patchTodo(id: string, user: AppUser, dto: EditTodoDto): Promise<import("mongoose").Document<unknown, {}, import("./Todo").Todo> & import("./Todo").Todo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteTodo(id: string, user: AppUser): Promise<import("mongoose").Document<unknown, {}, import("./Todo").Todo> & import("./Todo").Todo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

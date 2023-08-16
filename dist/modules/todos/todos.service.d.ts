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
/// <reference types="mongoose/types/inferschematype" />
import { AddTodoDto } from "./dto/add-todo.dto";
import { Todo } from "./Todo";
import { Model } from "mongoose";
import { List } from "../lists/List";
import { ListTodosDto } from "./dto/list-todos.dto";
import { ShowTodoDto } from "./dto/show-todo.dto";
import { EditTodoDto } from "./dto/edit-todo.dto";
export declare class TodosService {
    private todoModel;
    private listModel;
    constructor(todoModel: Model<Todo>, listModel: Model<List>);
    add({ list, user, ...rest }: AddTodoDto): Promise<import("mongoose").Document<unknown, {}, Todo> & Todo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    list({ filters }: ListTodosDto): Promise<(import("mongoose").Document<unknown, {}, Todo> & Todo & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    show({ id, user }: ShowTodoDto): Promise<import("mongoose").Document<unknown, {}, Todo> & Todo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    edit({ id, user }: ShowTodoDto, dto: EditTodoDto): Promise<import("mongoose").Document<unknown, {}, Todo> & Todo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove({ id, user }: ShowTodoDto): Promise<import("mongoose").Document<unknown, {}, Todo> & Todo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

import mongoose, { HydratedDocument } from "mongoose";
export type TodoDocument = HydratedDocument<Todo>;
export declare class Todo {
    text: string;
    is_done: boolean;
    is_deleted: boolean;
    user: string;
    list: string;
}
export declare const TodoSchema: mongoose.Schema<Todo, mongoose.Model<Todo, any, any, any, mongoose.Document<unknown, any, Todo> & Todo & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Todo, mongoose.Document<unknown, {}, Todo> & Todo & {
    _id: mongoose.Types.ObjectId;
}>;

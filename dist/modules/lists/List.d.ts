import mongoose, { HydratedDocument } from "mongoose";
import { Todo } from "../todos/Todo";
export type ListDocument = HydratedDocument<List>;
export declare class List {
    name: string;
    is_deleted: boolean;
    user: string;
    todos: string[] | Todo[];
}
export declare const ListSchema: mongoose.Schema<List, mongoose.Model<List, any, any, any, mongoose.Document<unknown, any, List> & List & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, List, mongoose.Document<unknown, {}, List> & List & {
    _id: mongoose.Types.ObjectId;
}>;

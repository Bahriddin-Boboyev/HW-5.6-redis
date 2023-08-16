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
import { Model } from "mongoose";
import { AddListDto } from "./dto/add-list.dto";
import { EditListDto } from "./dto/edit-list.dto";
import { List } from "./List";
import { ListListsDto } from "./dto/list-lists.dto";
import { ShowListDto } from "./dto/show-list.dto";
export declare class ListsService {
    private listModel;
    constructor(listModel: Model<List>);
    add(dto: AddListDto): Promise<import("mongoose").Document<unknown, {}, List> & List & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    list({ filters }: ListListsDto): Promise<(import("mongoose").Document<unknown, {}, List> & List & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    show({ id, user }: ShowListDto): Promise<import("mongoose").Document<unknown, {}, List> & List & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    edit({ id, user }: ShowListDto, dto: EditListDto): Promise<import("mongoose").Document<unknown, {}, List> & List & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove({ id, user }: ShowListDto): Promise<import("mongoose").Document<unknown, {}, List> & List & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

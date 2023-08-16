import { AddUserDto } from "./add-user.dto";
declare const EditUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<AddUserDto, "password">>>;
export declare class EditUserDto extends EditUserDto_base {
}
export {};

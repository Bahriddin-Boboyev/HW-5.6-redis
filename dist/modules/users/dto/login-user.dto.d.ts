import { AddUserDto } from "./add-user.dto";
declare const LoginUserDto_base: import("@nestjs/mapped-types").MappedType<Pick<AddUserDto, "username" | "password">>;
export declare class LoginUserDto extends LoginUserDto_base {
}
export {};

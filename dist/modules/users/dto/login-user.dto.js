"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const add_user_dto_1 = require("./add-user.dto");
class LoginUserDto extends (0, mapped_types_1.PickType)(add_user_dto_1.AddUserDto, [
    "username",
    "password",
]) {
}
exports.LoginUserDto = LoginUserDto;
//# sourceMappingURL=login-user.dto.js.map
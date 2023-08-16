"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const add_user_dto_1 = require("./add-user.dto");
class EditUserDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(add_user_dto_1.AddUserDto, ["password"])) {
}
exports.EditUserDto = EditUserDto;
//# sourceMappingURL=edit-user.dto.js.map
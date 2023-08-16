"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditListDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const add_list_dto_1 = require("./add-list.dto");
class EditListDto extends (0, mapped_types_1.PartialType)(add_list_dto_1.AddListDto) {
}
exports.EditListDto = EditListDto;
//# sourceMappingURL=edit-list.dto.js.map
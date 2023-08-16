"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditTodoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const add_todo_dto_1 = require("./add-todo.dto");
class EditTodoDto extends (0, mapped_types_1.PartialType)(add_todo_dto_1.AddTodoDto) {
}
exports.EditTodoDto = EditTodoDto;
//# sourceMappingURL=edit-todo.dto.js.map
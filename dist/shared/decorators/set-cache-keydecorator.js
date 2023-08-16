"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetCacheKey = exports.CACHE_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.CACHE_KEY = "cacheKey";
const SetCacheKey = (factory) => (0, common_1.SetMetadata)(exports.CACHE_KEY, factory);
exports.SetCacheKey = SetCacheKey;
//# sourceMappingURL=set-cache-keydecorator.js.map
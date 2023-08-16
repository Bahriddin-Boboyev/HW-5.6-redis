"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpCacheInterceptor = void 0;
const cache_manager_1 = require("@nestjs/cache-manager");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const set_cache_keydecorator_1 = require("../decorators/set-cache-keydecorator");
let HttpCacheInterceptor = exports.HttpCacheInterceptor = class HttpCacheInterceptor extends cache_manager_1.CacheInterceptor {
    constructor(cacheManager, reflector) {
        super(cacheManager, reflector);
    }
    trackBy(context) {
        const request = context.switchToHttp().getRequest();
        const factory = this.reflector.getAllAndOverride(set_cache_keydecorator_1.CACHE_KEY, [context.getHandler(), context.getClass()]);
        return factory(request);
    }
};
exports.HttpCacheInterceptor = HttpCacheInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [Object, core_1.Reflector])
], HttpCacheInterceptor);
//# sourceMappingURL=http-interceptor.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const config_2 = require("../config");
const redisStore = require("cache-manager-redis-store");
const cache_manager_1 = require("@nestjs/cache-manager");
let CoreModule = exports.CoreModule = class CoreModule {
};
exports.CoreModule = CoreModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [config_2.default],
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => {
                    const { host, port, name } = configService.get("db");
                    return {
                        uri: `mongodb://${host}:${port}/${name}`,
                    };
                },
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [],
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    return {
                        global: true,
                        secret: configService.get("jwt.secret"),
                        signOptions: {
                            expiresIn: "4h",
                        },
                        verifyOptions: {
                            ignoreExpiration: false,
                        },
                    };
                },
            }),
            cache_manager_1.CacheModule.registerAsync({
                useFactory: () => {
                    return {
                        isGlobal: true,
                        ttl: 60 * 60,
                        store: redisStore,
                        host: "127.0.0.1",
                        port: 6379,
                    };
                },
            }),
        ],
        providers: [],
        exports: [config_1.ConfigModule, mongoose_1.MongooseModule, jwt_1.JwtModule, cache_manager_1.CacheModule],
    })
], CoreModule);
//# sourceMappingURL=core.module.js.map
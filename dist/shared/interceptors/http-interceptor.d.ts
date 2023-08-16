import { CacheInterceptor } from "@nestjs/cache-manager";
import { ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Cache } from "cache-manager";
export declare class HttpCacheInterceptor extends CacheInterceptor {
    constructor(cacheManager: Cache, reflector: Reflector);
    trackBy(context: ExecutionContext): string | undefined;
}

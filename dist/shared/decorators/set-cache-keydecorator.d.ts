import { Request } from "express";
export type CacheKeyFactoryFunction = (request: Request) => string;
export declare const CACHE_KEY = "cacheKey";
export declare const SetCacheKey: (factory: CacheKeyFactoryFunction) => import("@nestjs/common").CustomDecorator<string>;

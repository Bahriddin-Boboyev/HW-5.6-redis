import { SetMetadata } from "@nestjs/common";
import { Request } from "express";

export type CacheKeyFactoryFunction = (request: Request) => string;

export const CACHE_KEY = "cacheKey";
export const SetCacheKey = (factory: CacheKeyFactoryFunction) =>
  SetMetadata(CACHE_KEY, factory);

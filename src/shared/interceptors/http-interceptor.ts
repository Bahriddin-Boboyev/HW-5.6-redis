import { CACHE_MANAGER, CacheInterceptor } from "@nestjs/cache-manager";
import { ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import {
  CACHE_KEY,
  CacheKeyFactoryFunction,
} from "../decorators/set-cache-keydecorator";
import { Request } from "express";
import { Cache } from "cache-manager";

@Injectable()
export class HttpCacheInterceptor extends CacheInterceptor {
  constructor(
    @Inject(CACHE_MANAGER) cacheManager: Cache,
    reflector: Reflector,
  ) {
    super(cacheManager, reflector);
  }

  trackBy(context: ExecutionContext): string | undefined {
    const request = context.switchToHttp().getRequest<Request>();
    const factory = this.reflector.getAllAndOverride<CacheKeyFactoryFunction>(
      CACHE_KEY,
      [context.getHandler(), context.getClass()],
    );

    return factory(request);
  }
}

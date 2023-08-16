import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { JwtModule } from "@nestjs/jwt";
import configuration, { IDatebaseConfig } from "../config";
import * as redisStore from "cache-manager-redis-store";
import { CacheModule } from "@nestjs/cache-manager";
// import { CacheInterceptor, CacheModule } from "@nestjs/cache-manager";
// import { APP_INTERCEPTOR } from "@nestjs/core";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const { host, port, name } = configService.get<IDatebaseConfig>("db");
        return {
          uri: `mongodb://${host}:${port}/${name}`,
        };
      },
    }),
    JwtModule.registerAsync({
      imports: [],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          global: true,
          secret: configService.get<string>("jwt.secret"),
          signOptions: {
            expiresIn: "4h",
          },
          verifyOptions: {
            ignoreExpiration: false,
          },
        };
      },
    }),
    CacheModule.registerAsync({
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
  providers: [
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CacheInterceptor,
    // },
  ],
  exports: [ConfigModule, MongooseModule, JwtModule, CacheModule],
})
export class CoreModule {}

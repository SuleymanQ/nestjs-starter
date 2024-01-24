import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from 'nestjs-drizzle/postgres';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as schema from './schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DrizzleModule.forRoot({
      connection: new ConfigService().get<string>('DATABASE_URL'),
      schema,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { DrizzleService } from 'nestjs-drizzle/postgres';
import { users } from './schema';
import { SchemaType } from './schema/type';

@Injectable()
export class AppService {
  constructor(
    private readonly drizzle: DrizzleService<SchemaType>,
  ) {}

  async getHello(): Promise<string> {
    return 'Hello World!';
  }

  async getUsers() {
    return await this.drizzle
      .get(users, {
        id: users.id,
        name: users.name,
        email: users.email,
        age: users.age,
      })
      .limit(10)
      .execute();
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TsRest } from '@ts-rest/nest';
import { c } from './app.router';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @TsRest(c.getHello)
  async getHello(): TResponse<typeof c.getHello> {
    const response = await this.appService.getHello();

    if (!response) {
      return {
        status: 404,
        body: {
          message: 'Not found',
        },
      };
    }

    return {
      status: 200,
      body: response,
    };
  }

  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }
}

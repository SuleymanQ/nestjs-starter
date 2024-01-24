import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '@/app.module';
import { AppService } from '@/app.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let service: AppService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [AppService],
    }).compile();

    app = moduleFixture.createNestApplication();
    service = moduleFixture.get<AppService>(AppService);
    await app.init();
  });

  it('/ (GET)', async () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/users (GET)', async () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(await service.getUsers());
  });
});

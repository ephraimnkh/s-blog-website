import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { BlogCategoryModule } from './blog-category/blog-category.module';
import { BlogTagModule } from './blog-tag/blog-tag.module';
import { LoginController } from './login/login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import 'dotenv/config';
import { LoginService } from './login/login.service';
import { UsersService } from './users/users.service';

const host = process.env.SEBENZA_DB_HOST;
const username = process.env.SEBENZA_APP_USERNAME;
const password = process.env.SEBENZA_APP_PASSWORD;
const database = process.env.SEBENZA_DB_NAME;
const type: 'mysql' =
  process.env.SEBENZA_DB_TYPE !== 'mysql'
    ? 'mysql'
    : process.env.SEBENZA_DB_TYPE;
const portString = process.env.SEBENZA_DB_PORT;
const port = Number(portString);

@Module({
  imports: [
    BlogModule,
    BlogCategoryModule,
    BlogTagModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type,
      host,
      port,
      username,
      password,
      database,
      entities: [],
      autoLoadEntities: true,
      synchronize: false,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService, UsersService],
})
export class AppModule {}

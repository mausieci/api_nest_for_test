import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      //envFilePath: `.${process.env.NODE_ENV}.env`,
      envFilePath: ['.develop.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    ProjectsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

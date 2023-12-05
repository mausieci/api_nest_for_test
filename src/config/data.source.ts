import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

/**
 * DB_HOST=localhost
DB_PORT=5432
DB_USER=mauro
DB_PASSWORD=mauro12345
DB_NAME=api_test
 */

ConfigModule.forRoot({
  envFilePath: `.${process.env.NODE_ENV}.env`,
});

const configService = new ConfigService();
/* console.log(configService.get('DB_USER'));
console.log(configService.get('DB_PASSWORD'));
console.log(configService.get('DB_NAME'));
console.log('-------');
console.log('-------');
console.log(process.env); */

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  /* host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'), */
  host: 'localhost',
  port: 5432,
  username: 'mauro',
  password: 'mauro12345',
  database: 'api_test',
  entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export const AppDS = new DataSource(DataSourceConfig);

import envConfig from './config/env';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { UserEntity } from './modules/user/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [envConfig],
    }),
    TypeOrmModule.forRootAsync({
      // imports: [ConfigModule],
      // inject: [ConfigModule],
      useFactory: () => ({
        type: 'mysql',
        entities: [UserEntity],
        host: '43.136.88.41',
        port: 3306,
        username: 'chat',
        password: 'Aa8303722.',
        database: 'chat',
        timezone: '+08:00',
        synchronize: true,
      }),
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import envConfig from './config/env';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { UserModule } from './modules/user/user.module';
import { AuthEntity } from './auth/entities/auth.entity';
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
        port: 3306,
        type: 'mysql',
        username: 'chat',
        database: 'chat',
        synchronize: true,
        timezone: '+08:00',
        host: '43.136.88.41',
        password: 'Aa8303722.',
        entities: [UserEntity, AuthEntity],
      }),
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

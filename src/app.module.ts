import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TitleModule } from './title/title.module';
import { ConfigModule } from "@nestjs/config";
import { KnexModule } from './knex/knex.module';
import { SalaryModule } from './salary/salary.module';

@Module({
  imports: [TitleModule, ConfigModule.forRoot({isGlobal: true}), KnexModule, SalaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

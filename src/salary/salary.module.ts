import { Module } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { SalaryController } from './salary.controller';
import { KnexModule } from "../knex/knex.module";

@Module({
  imports: [KnexModule],
  providers: [SalaryService],
  controllers: [SalaryController]
})
export class SalaryModule {}

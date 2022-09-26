import { Module } from '@nestjs/common';
import { TitleController } from './title.controller';
import { TitleService } from './title.service';
import { KnexModule } from "../knex/knex.module";

@Module({
  imports: [KnexModule],
  controllers: [TitleController],
  providers: [TitleService]
})
export class TitleModule {}

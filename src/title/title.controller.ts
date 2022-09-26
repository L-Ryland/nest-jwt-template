import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { KnexService } from "../knex/knex.service";
import { Knex } from "knex";
import { QueryTitleDto, TitleDto } from "../dto/title.dto";

const titlePrefix = "titles";
@Controller(titlePrefix)
export class TitleController {
  knex: Knex;
  constructor(private knexService: KnexService) {
    this.knex = knexService.knex
  }

  @Get()
  @UsePipes(new ValidationPipe({transform: true}))
  async getTitle(@Query() queryTitleDto?: QueryTitleDto) {
    // console.log(this.knexService.knex);
    console.log(queryTitleDto, 'queryTitleDto');
    const {limit, offset, order, pagination, ...titleEntity} = queryTitleDto;
    const queryChain = this.knex(titlePrefix).where(titleEntity);
    if (order) queryChain.orderBy(order);
    const newOffset = pagination ? (Number(pagination) + 1) * limit : offset;
    return queryChain.limit(limit).offset(newOffset);
  }

  @Post()
  @UsePipes(new ValidationPipe({transform: true}))
  async createTitleRecord(@Body() createTitle: TitleDto) {
    // return createTitle;
    return this.knex(titlePrefix).insert(createTitle);
  }

  @Delete(":id")
  async deleteRecord(@Param("id") emp_no: string) {
    return this.knex(titlePrefix).where({emp_no}).delete();
  }

  @Put(":id")
  async updateRecord(@Param("id") emp_no: string, @Body() updateRecord: Omit<TitleDto, "emp_no">) {
    // return updateRecord;
    return this.knex(titlePrefix).where({emp_no}).update(updateRecord);
  }
}

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
import { Roles } from "../role/role.decorator";

const titlePrefix = "titles";
@Roles("SuperAdminRealm")
@Controller(titlePrefix)
export class TitleController {
  knex: Knex;
  constructor(private knexService: KnexService) {
    this.knex = knexService.knex
  }

  @Get()
  @UsePipes(new ValidationPipe({transform: true}))
  async getAllTitles(@Query() queryTitleDto?: QueryTitleDto) {
    // console.log(this.knexService.knex);
    console.log(queryTitleDto, 'queryTitleDto');
    const {limit, offset, order, pagination, ...titleEntity} = queryTitleDto;
    const queryChain = this.knex(titlePrefix).where(titleEntity);
    if (order) queryChain.orderBy(order);
    const newOffset = pagination ? (Number(pagination) + 1) * limit : offset;
    const [record] = await this.knex(titlePrefix).countDistinct("emp_no").where(titleEntity);
    const [count] = Object.values(record);
    if (Number(count) > offset) queryChain.limit(limit).offset(newOffset);
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

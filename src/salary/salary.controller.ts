import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { Knex } from "knex";
import { KnexService } from "../knex/knex.service";
import { QuerySalaryDto, SalaryDto } from "../dto/salary.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { Roles } from "../role/role.decorator";

const salaryPrefix = "salaries";

@Controller(salaryPrefix)
export class SalaryController {
  knex: Knex;

  constructor(private knexService: KnexService) {
    this.knex = knexService.knex;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @Roles("SUPER_ADMIN_REALM")
  @UsePipes(new ValidationPipe({ transform: true }))
  async getAllSalaries(@Query() querySalaryDto?: QuerySalaryDto) {
    const { limit, offset, order, pagination, ...salaryEntity } = querySalaryDto;
    const queryChain = this.knex(salaryPrefix).where(salaryEntity);
    if (order) queryChain.orderBy(order);
    const newOffset = pagination ? (Number(pagination) + 1) * limit : offset;
    // let count = 0;
    const [record] = await this.knex(salaryPrefix).countDistinct("emp_no").where(salaryEntity);
    const [count] = Object.values(record);
    // return count;
    if (Number(count) > offset) queryChain.limit(limit).offset(newOffset);
    return queryChain;
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createTitleRecord(@Body() createTitle: SalaryDto) {
    // return createTitle;
    return this.knex(salaryPrefix).insert(createTitle);
  }

  @Delete(":id")
  async deleteRecord(@Param("id") emp_no: string) {
    return this.knex(salaryPrefix).where({ emp_no }).delete();
  }

  @Put(":id")
  async updateRecord(@Param("id") emp_no: string, @Body() updateRecord: Omit<SalaryDto, "emp_no">) {
    // return updateRecord;
    return this.knex(salaryPrefix).where({ emp_no }).update(updateRecord);
  }
}

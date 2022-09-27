export class SalaryDto {
  emp_no: number;
  salary: number;
  from_date: Date;
  to_date: Date;
}

export class QuerySalaryDto extends SalaryDto {
  order?: {column: keyof SalaryDto, order: "desc" | "asc"}[] = [];
  pagination = 0;
  limit? =  30;
  offset? = (Number(this.pagination) + 1) * this.limit;
}
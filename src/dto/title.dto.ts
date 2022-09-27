
export class TitleDto {
  emp_no: number;
  title: string;
  from_date: Date;
  to_date: Date;
}

export class QueryTitleDto extends TitleDto {
  order?: {column: keyof TitleDto, order: "desc" | "asc"}[] = [];
  pagination = 0;
  limit? =  30;
  offset? = (Number(this.pagination) + 1) * this.limit;
}
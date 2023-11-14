import { PaginationDto } from '@lib/shared/dto';

export class ResponseWithPagination<T> extends PaginationDto {
  total!: number;

  data: T[];
}

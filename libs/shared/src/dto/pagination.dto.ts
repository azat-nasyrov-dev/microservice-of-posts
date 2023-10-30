import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @Min(0)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  @Type(() => Number)
  offset = 0;

  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  @IsPositive()
  @Type(() => Number)
  limit = 15;
}

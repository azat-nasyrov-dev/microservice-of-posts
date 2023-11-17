import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ArgsType, Field, Int } from '@nestjs/graphql';
import { ApiPropertyOptional } from '@nestjs/swagger';

@ArgsType()
export class PaginationDto {
  @ApiPropertyOptional({ description: 'Пропуск строк', type: 'number' })
  @IsOptional()
  @Min(0)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  @Type(() => Number)
  @Field(() => Int, { description: 'Пропуск строк' })
  offset = 0;

  @ApiPropertyOptional({ description: 'Количество строк', type: 'number' })
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  @IsPositive()
  @Type(() => Number)
  @Field(() => Int, { description: 'Количество строк' })
  limit = 15;
}

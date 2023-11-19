import { PaginationDto } from '@lib/shared/dto';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  getSchemaPath,
} from '@nestjs/swagger';
import { applyDecorators, Type } from '@nestjs/common';

export class ResponseWithPagination<T> extends PaginationDto {
  @ApiProperty({ description: 'Всего записей в БД', type: 'number' })
  total!: number;

  @ApiProperty({
    description: 'Набор данных',
    default: [],
    isArray: true,
    items: {},
  })
  data: T[];
}

export const ApiOkResponsePaginated = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiExtraModels(Response, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(Response) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(dataDto) },
              },
            },
          },
        ],
      },
    }),
  );

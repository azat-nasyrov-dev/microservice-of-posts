import { UpdatePostDto as IUpdatePostDto } from '@lib/post/application-services/commands/dto';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';

export class UpdatePostDto implements IUpdatePostDto {
  @ApiProperty({
    description: 'Идентификатор поста',
    type: 'string',
    example: randomStringGenerator(),
  })
  @IsUUID()
  id: string;

  @ApiPropertyOptional({ description: 'Заголовок поста', type: 'string' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title: string;

  @ApiPropertyOptional({ description: 'Сообщение поста', type: 'string' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  message: string;

  @IsUUID()
  authorId: string;
}

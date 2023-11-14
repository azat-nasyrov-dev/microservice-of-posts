import { UpdatePostDto as IUpdatePostDto } from '@lib/post/application-services/commands/dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdatePostDto implements IUpdatePostDto {
  @IsUUID()
  id: string;

  @IsUUID()
  title?: string;

  @IsOptional()
  @IsString()
  message: string;

  @IsOptional()
  @IsString()
  authorId: string;
}

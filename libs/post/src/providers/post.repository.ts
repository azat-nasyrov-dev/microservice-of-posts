import { IPost, PostAggregate } from '@lib/post';
import { PaginationDto } from '@lib/shared/dto';

export abstract class PostRepository {
  abstract save(post: IPost): Promise<PostAggregate>;
  abstract findOne(id: string): Promise<PostAggregate | null>;
  abstract findAll(
    pagination: PaginationDto,
  ): Promise<[[PostAggregate], number]>;
  abstract delete(id: string): Promise<boolean>;
}

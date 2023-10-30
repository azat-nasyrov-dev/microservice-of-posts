import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPostsQuery } from '@lib/post/application-services/queries/get-posts/get-posts.query';
import { PostAggregate } from '@lib/post';
import { PostRepository } from '@lib/post/providers';
import { Logger } from '@nestjs/common';

@QueryHandler(GetPostsQuery)
export class GetPostsQueryHandler
  implements IQueryHandler<GetPostsQuery, [PostAggregate[], number]>
{
  private readonly logger = new Logger(GetPostsQueryHandler.name);
  constructor(private readonly postRepository: PostRepository) {}

  async execute({
    pagination,
  }: GetPostsQuery): Promise<[PostAggregate[], number]> {
    const [data, count] = await this.postRepository
      .findAll(pagination)
      .catch((err) => {
        this.logger.error(err);

        return [[], 0];
      });

    return [data, count] as [PostAggregate[], number];
  }
}

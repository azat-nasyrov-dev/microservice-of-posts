import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPostQuery } from '@lib/post/application-services/queries/get-post/get-post.query';
import { PostAggregate } from '@lib/post';
import { PostRepository } from '@lib/post/providers';
import { Logger } from '@nestjs/common';

@QueryHandler(GetPostQuery)
export class GetPostQueryHandler
  implements IQueryHandler<GetPostQuery, PostAggregate>
{
  private readonly logger = new Logger(GetPostQueryHandler.name);
  constructor(private readonly postRepository: PostRepository) {}

  async execute({ id }: GetPostQuery): Promise<PostAggregate | null> {
    return await this.postRepository.findOne(id).catch((err) => {
      this.logger.error(err);

      return null as PostAggregate;
    });
  }
}

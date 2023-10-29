import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SetPublishedCommand } from '@lib/post/application-services/commands/set-published/set-published.command';
import { PostAggregate } from '@lib/post';
import { BadRequestException, Logger } from '@nestjs/common';
import { PostRepository } from '@lib/post/providers';

@CommandHandler(SetPublishedCommand)
export class SetPublishedCommandHandler
  implements ICommandHandler<SetPublishedCommand, PostAggregate>
{
  private readonly logger = new Logger(SetPublishedCommandHandler.name);
  constructor(private readonly postRepository: PostRepository) {}

  async execute({ id }: SetPublishedCommand): Promise<PostAggregate> {
    const existPost = await this.postRepository.findOne(id).catch((err) => {
      this.logger.error(err);

      return null as PostAggregate;
    });

    if (!existPost) {
      throw new BadRequestException(`Post by id ${id} not found!`);
    }

    const postAggregate = PostAggregate.create(existPost);
    await postAggregate.setPublished();
    await this.postRepository.save(postAggregate);

    return postAggregate;
  }
}

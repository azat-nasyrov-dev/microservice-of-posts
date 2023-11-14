import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePostCommand } from '@lib/post/application-services/commands/create-post/create-post.command';
import { PostAggregate } from '@lib/post';
import { PostRepository } from '@lib/post/providers';
import { BadRequestException } from '@nestjs/common';

@CommandHandler(CreatePostCommand)
export class CreatePostCommandHandler
  implements ICommandHandler<CreatePostCommand, PostAggregate>
{
  constructor(private readonly postRepository: PostRepository) {}

  async execute({ post }: CreatePostCommand): Promise<PostAggregate> {
    const postAggregate = PostAggregate.create(post);
    await postAggregate.plainToInstance();
    return await this.postRepository.save(postAggregate).catch((err) => {
      throw new BadRequestException(err);
    });
  }
}

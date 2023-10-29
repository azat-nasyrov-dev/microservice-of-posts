import { Type } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';
import { CreatePostCommandHandler } from '@lib/post/application-services/commands/create-post/create-post.command-handler';
import { UpdatePostCommandHandler } from '@lib/post/application-services/commands/update-post/update-post.command-handler';
import { DeletePostCommandHandler } from '@lib/post/application-services/commands/delete-post/delete-post.command-handler';

export const POST_COMMANDS_HANDLERS: Type<ICommandHandler>[] = [
  CreatePostCommandHandler,
  UpdatePostCommandHandler,
  DeletePostCommandHandler,
];

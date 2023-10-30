import { Type } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';
import { CreatePostCommandHandler } from '@lib/post/application-services/commands/create-post/create-post.command-handler';
import { UpdatePostCommandHandler } from '@lib/post/application-services/commands/update-post/update-post.command-handler';
import { DeletePostCommandHandler } from '@lib/post/application-services/commands/delete-post/delete-post.command-handler';
import { SetPublishedCommandHandler } from '@lib/post/application-services/commands/set-published/set-published.command-handler';

// commands
export * from './create-post/create-post.command';
export * from './delete-post/delete-post.command';
export * from './set-published/set-published.command';
export * from './update-post/update-post.command';

// command-handlers
export * from './create-post/create-post.command-handler';
export * from './delete-post/delete-post.command-handler';
export * from './set-published/set-published.command-handler';
export * from './update-post/update-post.command-handler';

export const POST_COMMANDS_HANDLERS: Type<ICommandHandler>[] = [
  CreatePostCommandHandler,
  UpdatePostCommandHandler,
  DeletePostCommandHandler,
  SetPublishedCommandHandler,
];

import { Module, OnModuleInit } from '@nestjs/common';
import { CommandBus, CqrsModule, EventBus, QueryBus } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from '@lib/entities';
import { POST_COMMANDS_HANDLERS } from '@lib/post/application-services/commands';
import { POST_QUERIES_HANDLERS } from '@lib/post/application-services/queries';
import { POST_EVENTS_HANDLERS } from '@lib/post/application-services/events';
import { PostFacade } from '@lib/post/application-services';
import { postFacadeFactory } from '@lib/post/providers/post-facade.factory';
import { PostRepository } from '@lib/post/providers';
import { PostAdapter } from '@lib/post/providers/post.adapter';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([PostEntity])],
  providers: [
    ...POST_COMMANDS_HANDLERS,
    ...POST_QUERIES_HANDLERS,
    ...POST_EVENTS_HANDLERS,
    {
      provide: PostFacade,
      inject: [CommandBus, QueryBus, EventBus],
      useFactory: postFacadeFactory,
    },
    {
      provide: PostRepository,
      useClass: PostAdapter,
    },
  ],
  exports: [PostFacade],
})
export class PostModule implements OnModuleInit {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly eventBus: EventBus,
  ) {}

  onModuleInit() {
    this.commandBus.register(POST_COMMANDS_HANDLERS);
    this.queryBus.register(POST_QUERIES_HANDLERS);
    this.eventBus.register(POST_EVENTS_HANDLERS);
  }
}

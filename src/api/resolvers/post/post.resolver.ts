import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostResponse } from '../responses';
import { PostFacade } from '@lib/post/application-services';

@Resolver(() => PostResponse)
export class PostResolver {
  constructor(private readonly postFacade: PostFacade) {}

  @Query(() => PostResponse, { name: 'post' })
  async getPostById(@Args('id') id: string) {
    return await this.postFacade.queries.getOnePost(id);
  }
}

import { Args, Query, Resolver } from '@nestjs/graphql';
import { PaginatedPosts, PostResponse } from '../responses';
import { PostFacade } from '@lib/post/application-services';
import { PaginationDto } from '@lib/shared';
import { plainToInstance } from 'class-transformer';

@Resolver(() => PostResponse)
export class PostResolver {
  constructor(private readonly postFacade: PostFacade) {}

  @Query(() => PostResponse, { name: 'post' })
  async getPostById(@Args('id') id: string) {
    return await this.postFacade.queries.getOnePost(id);
  }

  @Query(() => PaginatedPosts, { name: 'posts' })
  async getPosts(@Args() paginationDto: PaginationDto) {
    const pagination = plainToInstance(PaginationDto, paginationDto);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [data, total] = await this.postFacade.queries.getAllPosts(pagination);
    return {
      ...pagination,
      data,
      total,
    };
  }
}

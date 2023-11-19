import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaginatedPosts, PostResponse } from '../responses';
import { PostFacade } from '@lib/post/application-services';
import { PaginationDto } from '@lib/shared';
import { plainToInstance } from 'class-transformer';
import { CreatePostInput, UpdatePostInput } from '../inputs';
import { GqlCurrentUser, ICurrentUser, Public } from '@lib/auth';
import { UseGuards } from '@nestjs/common';
import { GqlGuard } from '@lib/auth/guards/gql.guard';

@UseGuards(GqlGuard)
@Resolver(() => PostResponse)
export class PostResolver {
  constructor(private readonly postFacade: PostFacade) {}

  @Public()
  @Query(() => PostResponse, { name: 'post' })
  async getPostById(@Args('id') id: string) {
    return await this.postFacade.queries.getOnePost(id);
  }

  @Public()
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

  @Mutation(() => PostResponse)
  async createPost(
    @GqlCurrentUser() currentUser: ICurrentUser,
    @Args('createPostInput') createPostInput: CreatePostInput,
  ) {
    return await this.postFacade.commands.createPost({
      ...createPostInput,
      authorId: currentUser.userId,
    });
  }

  @Mutation(() => PostResponse)
  async setPublishedPost(@Args('id') id: string) {
    return await this.postFacade.commands.setPublished(id);
  }

  @Mutation(() => PostResponse)
  async updatePost(
    @GqlCurrentUser() currentUser: ICurrentUser,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    return await this.postFacade.commands.updatePost({
      ...updatePostInput,
      authorId: currentUser.userId,
    });
  }

  @Mutation(() => Boolean)
  async deletePost(@Args('id') id: string) {
    return await this.postFacade.commands.deletePost(id);
  }
}

import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PostFacade } from '@lib/post/application-services';
import { CreatePostDto } from './dto';
import { CurrentUser, ICurrentUser } from '@lib/auth';
import { JwtGuard } from '@lib/auth/guards/jwt.guard';

@UseGuards(JwtGuard)
@Controller('post')
export class PostController {
  constructor(private readonly postFacade: PostFacade) {}

  @Post()
  createPost(
    @CurrentUser() user: ICurrentUser,
    @Body() createPostDto: CreatePostDto,
  ) {
    return this.postFacade.commands.createPost({
      ...createPostDto,
      authorId: user.userId,
    });
  }
}

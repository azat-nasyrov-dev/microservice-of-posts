import { CreatePostDto } from '@lib/post/application-services/commands/dto';

export class CreatePostCommand {
  constructor(public readonly post: CreatePostDto) {}
}

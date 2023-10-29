import { UpdatePostDto } from '@lib/post/application-services/commands/dto';

export class UpdatePostCommand {
  constructor(public readonly post: UpdatePostDto) {}
}

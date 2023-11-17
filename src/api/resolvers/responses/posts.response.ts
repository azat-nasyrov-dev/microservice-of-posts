import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '@lib/shared';
import { PostResponse } from './post.response';

@ObjectType()
export class PaginatedPosts extends Paginated(PostResponse) {}

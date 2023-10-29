import { IPost } from '@lib/post';

export type UpdatePostDto = Partial<Pick<IPost, 'title' | 'message'>> &
  Pick<IPost, 'id' | 'authorId'>;

import {
  ISetNotPublishedCase,
  SET_NOT_PUBLISHED,
} from '@lib/post/domain/services/set-not-published.case';
import { AggregateRoot } from '@nestjs/cqrs';
import {
  ISetPublishedCase,
  SET_PUBLISHED,
} from '@lib/post/domain/services/set-published.case';

export class PostServices
  extends AggregateRoot
  implements ISetNotPublishedCase, ISetPublishedCase
{
  setNotPublished = SET_NOT_PUBLISHED;
  setPublished = SET_PUBLISHED;
}

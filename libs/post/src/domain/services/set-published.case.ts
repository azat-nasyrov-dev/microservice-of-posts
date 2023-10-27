import { IPost } from '@lib/post';

export interface ISetPublishedCase {
  setPublished(): void;
}

export const SET_PUBLISHED = async function (this: IPost) {
  this.published = true;
};

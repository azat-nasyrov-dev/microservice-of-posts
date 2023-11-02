import { IPost } from '@lib/post';

export interface ISetNotPublishedCase {
  setNotPublished(): void;
}

export const SET_NOT_PUBLISHED = async function (this: IPost) {
  this.isPublished = false;
};

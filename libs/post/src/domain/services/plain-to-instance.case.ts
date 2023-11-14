import { IPost } from '@lib/post';
import { validateSync } from 'class-validator';

export interface IPlainToInstanceCase {
  plainToInstance(): void;
}

export const PLAIN_TO_INSTANCE = async function (this: IPost) {
  validateSync(this, { whitelist: true });
};

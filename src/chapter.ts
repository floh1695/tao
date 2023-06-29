import { ElementLike } from './element';

export type Chapter = {
  number: number,
  content: ElementLike,
};

export const Chapter = {
  new: (number: number, content: ElementLike): Chapter => ({
    number,
    content,
  }),
};

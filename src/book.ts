import { Chapter } from './chapter';

export type Book = {
  number: number,
  name: string,
  spaken: string,
  chapters: Array<Chapter>,
};

export const Book = {
  new: (number: number, name: string, spaken: string, chapters: Array<Chapter>): Book => ({
    number,
    name,
    spaken,
    chapters,
  }),
};

import { Optional } from './optional';

import { Chapter } from './chapter';

export type Book = {
  number: number,
  name: string,
  spaken: string,
  chapters: Array<Chapter>,
  addChapter: (c: Chapter) => Book;
};

export const addChapter = (bk: Book, c: Chapter) => {
  bk.chapters.push(c);
  return bk;
}

export const Book = {
  new: (number: number, name: string, spaken: string, chapters?: Optional<Array<Chapter>>): Book => {
    const book = {
      number,
      name,
      spaken,
      chapters: chapters ?? [],
      addChapter: (c: Chapter) => addChapter(book, c),
    };

    return book;
  },
};

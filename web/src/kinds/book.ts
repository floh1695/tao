import React from 'react';

import Chapter from '@kinds/chapter';

export type Book = {
  number: number,
  name: string,
  spaken: string,
  chapters: Array<Chapter>,
  addChapter: (c: Chapter) => Book,
  addNextChapter: (content: React.ReactNode) => Book,
};

export const addChapter = (book: Book, c: Chapter) => {
  book.chapters.push(c);
  return book;
}

export const addNextChapter = (book: Book, content: React.ReactNode) => {
  const chapterNumber = book.chapters.length + 1;
  const chapter = Chapter.new(chapterNumber, content);
  book.addChapter(chapter);

  return book;
};

export const Book = {
  new: (number: number, name: string, spaken: string, chapters?: Array<Chapter>): Book => {
    const book = {
      number,
      name,
      spaken,
      chapters: chapters ?? [],
      addChapter: (c: Chapter) => addChapter(book, c),
      addNextChapter: (c: React.ReactNode) => addNextChapter(book, c),
    };

    return book;
  },
};

export default Book;

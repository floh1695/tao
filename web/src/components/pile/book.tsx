import React from 'react';

import Chapter from '@components/pile/chapter';
import { Book as BookType } from '@kinds/book';

export default function Book({
  book,
}: {
  book: BookType,
}) {
  const id = `book${book.number}`;
  const chaptersHtml = book.chapters.map((c, i) => <Chapter key={i} chapter={c} bookNumber={book.number} ></Chapter>)

  return (
    <section id={id} className='book box'>
      <header>
        <h2>
          <a href={`#${id}`} target='_self'>BOOK {book.number}</a>
          <br />
          <em>{book.name}</em>
        </h2>
      </header>
      <p>
        <strong>
          Thus spake the Master Programmer:
          <br />
          <q>{book.spaken}</q>
        </strong>
      </p>
      {chaptersHtml}
    </section>
  );
};

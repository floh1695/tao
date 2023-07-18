import { Book as BookType } from '@/book';
import Chapter from '@components/pile/chapter';
import seconds from '@/seconds';
import React from 'react';

export default function Book({
  book,
}: {
  book: BookType,
}) {
  const id = `book${book.number}`;
  const chaptersHtml = book.chapters.map(c => <Chapter chapter={c} bookNumber={book.number}></Chapter>)

  return (
    <section id={id} className='book box'>
      <header>
        <h2>
          <a href={`#${id}`} target='_self'>BOOK {book.number}</a>
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

export async function getStaticProps() {
  return {
    props: {},
    revalidate: seconds.hours(1),
  };
};

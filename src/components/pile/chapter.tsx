import React from 'react';

import seconds from '@/seconds';
import { Chapter as ChapterType } from '@kinds/chapter';

export default function Book({
  chapter,
  bookNumber
}: {
  chapter: ChapterType,
  bookNumber: number
}) {
  const id = `book${bookNumber}chapter${chapter.number}`;

  return (
    <section id={id} className='chapter box'>
      <header>
        <h2>
          <a href={`#${id}`} target="_self">{bookNumber}.{chapter.number}</a>
        </h2>
      </header>
      {chapter.content}
    </section>
  );
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: seconds.hours(1),
  };
};

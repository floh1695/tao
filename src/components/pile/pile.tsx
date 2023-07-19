import React from 'react';

import seconds from '@/seconds';
import Book from '@components/pile/book';
import { Book as BookType } from '@kinds/book';

export default function Pile({
  pile,
}: {
  pile: BookType[],
}) {
  return pile.map((b, i) => <Book key={i} book={b}></Book>);
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: seconds.hours(1),
  };
};

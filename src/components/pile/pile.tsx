import { Book as BookType } from '@/book';
import seconds from '@/seconds';
import React from 'react';
import Book from '@components/pile/book';

export default function Pile({
  pile,
}: {
  pile: BookType[],
}) {
  return pile.map(b => <Book book={b}></Book>);
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: seconds.hours(1),
  };
};

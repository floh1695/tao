import React from 'react';

import seconds from '@/seconds';
import BookC from '@components/pile/book';
import BookT from '@kinds/book';

export default function Pile({
  pile,
}: {
  pile: BookT[],
}) {
  return pile.map((b, i) => <BookC key={i} book={b}></BookC>);
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: seconds.hours(1),
  };
};

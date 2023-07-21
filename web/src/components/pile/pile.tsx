import React from 'react';

import BookC from '@components/pile/book';
import BookT from '@kinds/book';

export default function Pile({
  pile,
}: {
  pile: BookT[],
}) {
  return pile.map((b, i) => <BookC key={i} book={b}></BookC>);
};

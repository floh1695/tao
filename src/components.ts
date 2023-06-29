import { ElementLike } from './element';
import { Optional } from './optional';

import { Book } from './book';
import { Chapter } from './chapter';

import { emDash } from './unicode';

import hyperscript from './hyperscript'
const {
  a,
  br,
  div,
  h2,
  h3,
  h4,
  p,
  q,
  section,
  span,
} = hyperscript;

export const link = ({ href, target = '_blank' }: { href: string, target?: string }, content?: Optional<ElementLike>): Element =>
  a({ href, target }, content ?? href);

export const note = (author: string, message: ElementLike): Element => {
  const markup = div([
    div([
      span('Note:'),
      q(message),
    ]),
    span(`${emDash}${author}`),
  ]);

  return markup;
};

export const book = (b: Book): Element => {
  const markup = section([
    h2(b.number),
    h3(b.name),
    p([
      'Thus spake the Master Programmer:',
      br(),
      q(b.spaken),
      b.chapters.map(c => chapter(c, b.number)),
    ]),
  ]);

  return markup;
};

export const chapter = (c: Chapter, bookNumber: number): Element => {
  const markup = section([
    h4(`${bookNumber}.${c.number}`),
    c.content,
  ]);

  return markup;
};

import { ElementLike } from './element';
import { Optional } from './optional';

import { Book } from './book';
import { Chapter } from './chapter';

import { emDash } from './unicode';

import hyperscript from './hyperscript'
const {
  a,
  b,
  br,
  div,
  h2,
  h3,
  h4,
  header,
  p,
  q,
  section,
  span,
} = hyperscript;

export const hyperlink = ({ href, target = '_blank' }: { href: string, target?: string }, content?: Optional<ElementLike>): Element =>
  a({ href, target }, content ?? href);

export const note = (author: string, message: ElementLike): Element => {
  const markup = div([
    div([
      span('Note: '),
      q(message),
    ]),
    span(`${emDash}${author}`),
  ]);

  return markup;
};

export const book = (bk: Book): Element => {
  const id = `book${bk.number}`;

  const markup = section({ class: 'book' }, [
    header([
      hyperlink({ href: `#${id}`, target: '_self' }, h2({ id }, ['BOOK ', bk.number])),
      h3(bk.name),
    ]),
    p([
      b([
        'Thus spake the Master Programmer:',
        br(),
        q(bk.spaken),
      ]),
      bk.chapters.map(c => chapter(c, bk.number)),
    ]),
  ]);

  return markup;
};

export const chapter = (c: Chapter, bookNumber: number): Element => {
  const id = `book${bookNumber}chapter${c.number}`;

  const markup = section({ class: 'chapter' }, [
    hyperlink({ href: `#${id}`, target: '_self' }, h4({ id }, `${bookNumber}.${c.number}`)),
    c.content,
  ]);

  return markup;
};

// export const sidenav = (): Element {
//   const markup = section([
//   ])
// };

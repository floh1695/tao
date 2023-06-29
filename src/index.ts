import fs from 'fs/promises';

import { ElementLike } from './element';
import { Optional } from './optional';

import pile from './pile';
import { Book } from './book';
import { Chapter } from './chapter';

import hyperscript from './hyperscript'
const {
  a,
  body,
  br,
  div,
  head,
  h1,
  h2,
  h3,
  h4,
  header,
  html,
  meta,
  p,
  q,
  section,
  span,
  title,
} = hyperscript;

const unicode = {
  emDash: '\u2014',
};

const components = {
  link: ({ href, target = '_blank' }: { href: string, target?: string }, content?: Optional<ElementLike>): Element =>
    a({ href, target }, content ?? href),

  note: (author: string, message: ElementLike): Element => {
    const markup = div([
      div([
        span('Note:'),
        q(message),
      ]),
      span(`${unicode.emDash}${author}`),
    ]);

    return markup;
  },

  book: (b: Book): Element => {
    const markup = section([
      h2(b.number),
      h3(b.name),
      p([
        'Thus spake the Master Programmer:',
        br(),
        q(b.spaken),
        b.chapters.map(c => components.chapter(c, b.number)),
      ]),
    ]);

    return markup;
  },

  chapter: (c: Chapter, bookNumber: number): Element => {
    const markup = section([
      h4(`${bookNumber}.${c.number}`),
      c.content,
    ]);

    return markup;
  },
};

const createMarkup = (): Element => {
  const siteName = 'The Tao of Programming';

  const markup = html([
    head([
      meta({ charset: 'UTF-8' }),
      title(siteName),
    ]),
    body([
      header([
        h1(siteName),
        p('Translated by Geoffrey James'),
      ]),
      div([
        components.note('Alex', [
          'I copied this from ',
          components.link({ href: 'http://misspiggy.gsfc.nasa.gov/tao.html' }),
          ' and stripped out all of the IMHO extraneous formatting.'
        ]),
        components.note('Charlie', [
          'I copied this from ',
          components.link({ href: 'http://www.mit.edu/~xela/tao.html' }),
          ' and updated the markup to be more modern.'
        ]),
      ]),
      pile.map(components.book),
    ]),
  ]);

  return markup;
};

const main = async () => {
  const markup = createMarkup();

  await fs.mkdir('www', { recursive: true });
  await fs.writeFile('www/index.html', markup.outerHTML);
};

main();

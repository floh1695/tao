import fs from 'fs/promises';

import { ElementLike } from './element';
import { Optional } from './optional';

import { Book } from './book';
import { Chapter } from './chapter';

import h from 'hyperscript';
import hh from 'hyperscript-helpers';
const {
  a,
  body,
  blockquote,
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
} = hh(h);

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
      components.book(Book.new(
        1,
        'The Silent Void',
        'When you have learned to snatch the error code from the trap frame, it will be time for you to leave.',
        [
          Chapter.new(1, [
            p([
              'Something mysterious is formed, born in the silent void.',
              'Waiting alone and unmoving, it is at once still and yet in constant motion.',
              'It is the source of all programs.',
              'I do not know its name, so I will call it the Tao of Programming.',
            ]),
            blockquote([
              'If the Tao is great, then the operating system is great.',
              br(),
              'If the operating system is great, then the compiler is great.',
              br(),
              'If the compiler is great, then the application is great.',
              br(),
              'The user is pleased, and there is harmony in the world.',
            ]),
            p('The Tao of Programming flows far away and returns on the wind of morning.'),
          ]),
        ]
      )),
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

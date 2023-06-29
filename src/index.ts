import fs from 'fs/promises';

import h from 'hyperscript';
import hh from 'hyperscript-helpers';
const {
  a,
  body,
  div,
  head,
  h1,
  header,
  html,
  meta,
  p,
  q,
  span,
  title,
} = hh(h);

type Optional<A> = A | null | undefined;

type ElementString = Element | string;
type ElementLike = ElementString | Array<ElementString>;

const unicode = {
  emDash: '\u2014',
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
        note('Alex', [
          'I copied this from ',
          link({ href: 'http://misspiggy.gsfc.nasa.gov/tao.html' }),
          ' and stripped out all of the IMHO extraneous formatting.'
        ]),
        note('Charlie', [
          'I copied this from ',
          link({ href: 'http://www.mit.edu/~xela/tao.html' }),
          ' and updated the page into semantic HTML with more hyperlinks.'
        ]),
      ]),
    ]),
  ]);

  return markup;
};

const link = ({ href, target = '_blank' }: { href: string, target?: string }, content?: Optional<ElementLike>): Element =>
  a({ href, target }, content ?? href);

const note = (author: string, message: ElementLike): Element => {
  const markup = div([
    div([
      span('Note:'),
      q(message),
    ]),
    span(`${unicode.emDash}${author}`),
  ]);

  return markup;
};

const main = async () => {
  const markup = createMarkup();

  await fs.mkdir('www', { recursive: true });
  await fs.writeFile('www/index.html', markup.outerHTML);
};

main();

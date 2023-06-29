import fs from 'fs/promises';

import { book, link, note } from './components';
import pile from './pile';

import hyperscript from './hyperscript'
const {
  body,
  div,
  head,
  h1,
  header,
  html,
  meta,
  p,
  title,
} = hyperscript;

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
          ' and updated the markup to be more modern.'
        ]),
      ]),
      pile.map(book),
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

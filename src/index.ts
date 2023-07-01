import fs from 'fs/promises';

import { book, hyperlink, note } from './components';
import pile from './pile';

import hyperscript from './hyperscript'
const {
  b,
  body,
  div,
  footer,
  head,
  h1,
  header,
  html,
  link,
  meta,
  p,
  title,
} = hyperscript;

const createMarkup = (): Element => {
  const siteName = 'The Tao of Programming';

  const markup = html([
    head([
      meta({ charset: 'UTF-8' }),
      link({ rel: 'stylesheet', href: 'global.css' }),
      title(siteName),
    ]),
    body([
      header([
        h1(siteName),
        b(p('Translated by Geoffrey James')),
      ]),
      div([
        note('Alex', [
          'I copied this from ',
          hyperlink({ href: 'http://misspiggy.gsfc.nasa.gov/tao.html' }),
          ' and stripped out all of the IMHO extraneous formatting.'
        ]),
        note('Charlie', [
          'I copied this from ',
          hyperlink({ href: 'http://www.mit.edu/~xela/tao.html' }),
          ' and updated the markup to be more modern.'
        ]),
      ]),
      pile.map(book),
      footer(hyperlink({ href: 'https://github.com/floh1695/tao' }, 'Check out the source code on GitHub!')),
    ]),
  ]);

  return markup;
};

const main = async () => {
  const markup = createMarkup();

  await fs.mkdir('www', { recursive: true });
  await fs.writeFile('www/index.html', markup.outerHTML);
  await fs.copyFile('static/global.css', 'www/global.css');
};

main();

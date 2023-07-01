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
  main,
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
      link({ rel: 'stylesheet', href: 'reset.css' }),
      title(siteName),
    ]),
    body([
      header([
        h1(siteName),
        p(b('Translated by Geoffrey James')),
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
      ]),
      main(pile.map(book)),
      footer(hyperlink({ href: 'https://github.com/floh1695/tao' }, 'Check out the source code on GitHub!')),
    ]),
  ]);

  return markup;
};

const start = async (): Promise<void> => {
  const markup = createMarkup();

  const pitchFrom = 'www';
  await fs.mkdir(pitchFrom, { recursive: true });

  fs.writeFile(`${pitchFrom}/index.html`, markup.outerHTML);
  copyFiles('static', pitchFrom);
};

const copyFiles = async (fromDir: string, toDir: string): Promise<void> => {
  const staticFiles = await fs.readdir(fromDir, { recursive: true });

  staticFiles
    .map(file => ({ from: `${fromDir}/${file}`, to: `${toDir}/${file}` }))
    .forEach(({ from, to }) => fs.copyFile(from, to));
};

start();

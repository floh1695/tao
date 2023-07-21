import '@styles/global.scss';
import '@styles/reset.scss';

import React from 'react';

import hosturl from '@/hosturl';
import Note from '@components/note';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <header id='header'>
          <h1><a href='/'>The Tao of Programming</a></h1>
          <strong>Translated by <em>Geoffrey James</em></strong>
        </header>
        <div>
          <Note author='Alex'>
            I copied this from <a href='http://misspiggy.gsfc.nasa.gov/tao.html'>http://misspiggy.gsfc.nasa.gov/tao.html</a> and stripped out all of the IMHO extraneous formatting.
          </Note>
          <Note author='Charlie'>
            I copied this from <a href='http://www.mit.edu/~xela/tao.html'>http://www.mit.edu/~xela/tao.html</a> because I wanted to update the style.
          </Note>
        </div>
        <main>
          {children}
        </main>
        <footer id='footer' className='box'>
          <a href='https://github.com/floh1695/tao'>
            Check out the source code on GitHub!
          </a>
        </footer>
      </body>
    </html>
  );
};

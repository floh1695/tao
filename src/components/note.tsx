import React from 'react';

import unicode from '@/unicode';

export default function Note({
  children,
  author,
}: {
  children: React.ReactNode,
  author: string,
}) {
  return (
    <div className='note box'>
      <div>
        Note: <q>{children}</q>
      </div>
      {unicode.emDash}{author}
    </div>
  );
};

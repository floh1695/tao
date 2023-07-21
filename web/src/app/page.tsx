import React from 'react';
import { Metadata } from 'next';

import pile from '@/pile';
import Pile from '@components/pile/pile';

export const metadata: Metadata = {
  title: 'The Tao of Programming',
  description: 'The Tao of Programming: Learn about the programmers of old.'
};

export default function Page({}) {
  return (
    <>
      <Pile pile={pile}></Pile>
    </>
  );
};

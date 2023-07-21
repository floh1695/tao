import React from 'react';
import { GetStaticProps, Metadata } from 'next';

import pile from '@/pile';
import Pile from '@components/pile/pile';

export const metadata: Metadata = {
  title: 'The Tao of Programming',
};

export default function Page({}) {
  return (
    <>
      <Pile pile={pile}></Pile>
    </>
  );
};

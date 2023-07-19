import React from 'react';
import { Metadata } from 'next';

import seconds from '@/seconds';
import pile from '@/pile';
import Pile from '@components/pile/pile';

export const metadata: Metadata = {
  title: 'The Tao of Programming',
};

export default function Page() {
  return (
    <>
      <Pile pile={pile}></Pile>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: seconds.hours(1),
  };
};

import Pile from '@/components/pile/pile';
import seconds from '@/seconds';
import { Metadata } from 'next';
import React from 'react';
import pile from '@/pile';

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

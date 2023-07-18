import seconds from '@/seconds';
import unicode from '@/unicode';
import React from 'react';

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

export async function getStaticProps() {
  return {
    props: {},
    revalidate: seconds.hours(1),
  };
};

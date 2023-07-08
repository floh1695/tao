import seconds from '@/seconds';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Tao of Programming',
};

export default function Page() {
  return (
    <>
      <h1>{String(metadata.title)}</h1>
      <p><b>Translated by Geoffrey James</b></p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: seconds.hours(1),
  };
};

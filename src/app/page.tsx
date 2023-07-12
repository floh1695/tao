import seconds from '@/seconds';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Tao of Programming',
};

export default function Page() {
  return (
    <>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: seconds.hours(1),
  };
};

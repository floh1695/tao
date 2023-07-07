import seconds from '../src/seconds';
import RootLayout from './layout';

export default function Page() {
  return (
    <RootLayout>
      <h1>Hello, Next.js!</h1>
    </RootLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: seconds.hours(1),
  };
};

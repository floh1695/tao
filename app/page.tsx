import seconds from '../src/seconds';

export default function Page() {
  return <h1>Hello, Next.js!</h1>;
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: seconds.hours(1),
  };
};

import Block from 'components/Block';

export default function Home() {
  console.log(process.env.CHECK);
  console.log(process.env.NEXT_PUBLIC_CHECK);

  return (
    <>
      <h1>AAA</h1>
      <Block />
    </>
  );
}

export async function getStaticProps() {
  console.log('build');
  console.log(process.env.CHECK);
  console.log(process.env.NEXT_PUBLIC_CHECK);

  return { props: { check: 1 } };
}

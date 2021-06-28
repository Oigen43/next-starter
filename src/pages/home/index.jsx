import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <Link href="/sign-in">
        <a>Sign In</a>
      </Link>
      <div />
      <Link href="/profile">
        <a>Profile</a>
      </Link>
    </>
  );
}

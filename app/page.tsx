import Link from "next/link";
export default function Home() {
  return (
    <div>
      Home
      <br />
      <br />
      <Link href="/signup">Register</Link>
      <br />
      <br />
      <button>Login</button>
    </div>
  );
}

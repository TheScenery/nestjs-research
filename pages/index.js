import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/ssr">SSR</Link>
        </li>
        <li>
          <Link href="/ssg">SSG</Link>
        </li>
        <li>
          <Link href="/csr">CSR</Link>
        </li>
      </ul>
      <ul>
        Html link
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/ssr">SSR</a>
        </li>
        <li>
          <a href="/ssg">SSG</a>
        </li>
        <li>
          <a href="/csr">CSR</a>
        </li>
      </ul>
    </div>
  );
}

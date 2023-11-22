import Link from 'next/link'

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
  </div>
  )
}

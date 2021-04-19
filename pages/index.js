import Head from 'next/head'
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello world</title>
      </Head>
      <Link href="/room">
          go to room #1
      </Link>
    </div>
  )
}

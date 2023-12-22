import Head from 'next/head'
import HomePage from '@/components/pages/HomePage/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/assets/img/logo.svg"
        />
      </Head>
      <HomePage />
    </>
  )
}

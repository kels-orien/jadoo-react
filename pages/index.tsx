import Head from 'next/head'
import Layout from '../components/Layout'
export default function Home() {
  return (
    <Layout >
      <Head>
        <title>Jadoo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
      </Head>     
    </Layout>
  )
}

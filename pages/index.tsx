import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Presentation from '../components/presentation'
import About from '../components/about'
import Contact from '../components/contact'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quentin Hoog</title>
        <meta name="description" content="Development, QA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Presentation />
        <About />
        <Contact />
      </main>

    </div>
  )
}

export default Home

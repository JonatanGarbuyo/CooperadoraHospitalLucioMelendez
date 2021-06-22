import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cooperadora Lucio Melendez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Footer />
    </div>
  )
}

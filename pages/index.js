import styles from '../styles/Home.module.css'
import HomeComponent from '../src/components/HomeComponent'
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Divine Classical Homeopathy</title>
        <link rel="logo icon" href="/logo.png" />
        <meta charset="UTF-8" />
        <meta name="description" content="Homeopathy website"/>
        <meta name="keywords" content="HTML, CSS, JavaScript, Next.js"/>
        <meta name="author" content="Shiva Gowtham Kale"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <HomeComponent />
    </div>
  )
}

import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
      <title>Blog-App</title>
      <meta name="description" content="nextjs,blog" />
      <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Script src='/sc.js' strategy="lazyonload"></Script> */}
      <nav className={styles.mainnav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Blog
        </h1>

        <p className={styles.description}>
        Trying to make a blog web app which is useful
        </p>

        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <h4>How to learn new javascript</h4>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
        </div>

        <div className={styles.blogs}>
          <div className={styles.blogItem}>
            <h4>How to learn new javascript</h4>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ZootieVerse</title>
        <meta name="description" content="Official ZootieVerse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-FRCVHLT7WY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-FRCVHLT7WY');
</script>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://zootieverse.com">ZootieVerse!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://ZootieVerse.com" className={styles.card}>
            <h2>ZootiePass &rarr;</h2>
            <p>Find in-depth information about the ZootiePass features and exclusive rewards for ZootiePass holders.</p>
          </a>

          <a href="https://ZootieVerse.com" className={styles.card}>
            <h2>ZootieGhost &rarr;</h2>
            <p>Learn about ZootieGhosts in the ZootieVerse!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>ZootieVerse &rarr;</h2>
            <p>ZootieVerse is built to operate on Desktop, Tablet, and Mobile. Coming Soon!</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Roadmap &rarr;</h2>
            <p>
              Learn More about the future of ZootieVerse and our upcoming Drops.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by B0N3SY.eth and ZootieKing.eth{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

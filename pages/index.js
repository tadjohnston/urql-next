import Head from 'next/head'
import styles from '../styles/Home.module.css'
import listingQuery from '../graphql/listing'
import { useQuery } from 'urql'
import { withUrqlClient } from 'next-urql'

function Home(props) {

  const [result] = useQuery({
    query: listingQuery,
    variables: {
      listingId: props.listingId,
    }
  })

  const { data, fetching, error } = result

  console.log('result... ', result)
  if (fetching || error) {
    return (
      <p>There's nothing here! But you won't see me because I've been pre-passed by urql-next.</p>
    )
  }

  console.log('data: ', data)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          {data.listing.propertyLabel}
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
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
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  // Do something with the urql Client instance!
  let client = ctx.urqlClient;

  return {
    listingId: '100067741'
  }
};

export default withUrqlClient(() => ({ url: 'http://localhost:3000/api/graphql' }), { ssr: true })(Home)

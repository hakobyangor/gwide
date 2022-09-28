import { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/main/header'
import './styles.css'
import { AuthProvider } from '../src/context/auth.context'
import { withApi } from '../api/client-api'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Head>
          <title>Welcome to web!</title>
        </Head>
        <main className="app ">
          <Header />
          <div className="container my-24 mx-auto max-w-7xl  pt-5">
            <Component {...pageProps} />
          </div>
        </main>
      </AuthProvider>
    </>
  )
}

export default withApi(CustomApp)

import { AppProps } from 'next/app'
import Head from 'next/head'
import './styles.css'
import { AuthProvider } from '../src/context/auth.context'
import { withApi } from '../api/client-api'
import Header from '../components/main/Header'
import Footer from '../components/main/Footer'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Head>
          <title>Gwide</title>
        </Head>
        <main className="app ">
          <Header />
          <div className="container my-24 mx-auto max-w-7xl  pt-5 px-4">
            <Component {...pageProps} />
          </div>
          <Footer />
        </main>
      </AuthProvider>
    </>
  )
}

export default withApi(CustomApp)

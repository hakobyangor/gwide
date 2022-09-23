import { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/main/header'
import './styles.css'
import { ThemeProvider } from '@material-tailwind/react'
import { AuthProvider } from '../src/context/auth.context'
import { withApi } from '../api/client-api'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <Head>
            <title>Welcome to web!</title>
          </Head>
          <main className="app ">
            <Header />
            <div className="container mx-auto pt-5">
              <Component {...pageProps} />
            </div>
          </main>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default withApi(CustomApp)

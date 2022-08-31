import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { withTRPC } from '@trpc/next'
import superjson from 'superjson'
import type { AppRouter } from '../server/router'
import 'raf/polyfill'
import '../styles/globals.css'
import { PreventSSR } from '../providers/PreventSSR'
import Navbar from '@components/layout/Navbar'

if (typeof window !== 'undefined') {
  // @ts-ignore
  window._frameTimestamp = null
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Reloop</title>
        <meta name='description' content='Reloop movies' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PreventSSR>
        <Navbar />
        <Component {...pageProps} />
      </PreventSSR>
    </>
  )
}

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return '' // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

export default withTRPC<AppRouter>({
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`

    return {
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    }
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp)

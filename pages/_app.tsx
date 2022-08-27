import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'raf/polyfill'

if (typeof window !== 'undefined') {
  // @ts-ignore
  window._frameTimestamp = null
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Reloop</title>
        <meta name='description' content='Reloop movies' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

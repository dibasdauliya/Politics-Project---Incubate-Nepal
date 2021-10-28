import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import customTheme from '@/utils/customTheme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta name='msapplication-TileColor' content='#603cba' />
        <meta name='theme-color' content='#603cba' />
        <meta content='width=device-width, initial-scale=1.0' name='viewport' />
        <title>Team Samsad</title>
        <meta name='image' content='https://samsad.vercel.app/logo.png' />
        <meta
          property='og:image'
          content='https://samsad.vercel.app/logo.png'
        />
        <meta
          name='twitter:image'
          content='https://samsad.vercel.app/logo.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

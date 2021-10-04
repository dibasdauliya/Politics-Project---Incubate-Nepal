import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import customTheme from '@/utils/customTheme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta content='width=device-width, initial-scale=1.0' name='viewport' />
        <title>Team Samsad</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

import React, { useEffect, useState } from 'react'
import data from '@/assets/data/articles.js'
import { useRouter } from 'next/router'
import Header from '../homepage/header'
import Footer from '../homepage/footer'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { Fonts } from '@/utils/Fonts'
import { MainLayout } from '@/components/layout'
import Head from 'next/head'

export default function Article() {
  // const [articles, setArticles] = useState(data)

  const router = useRouter()
  const { articleSlug } = router.query

  const title = 'Why is minority representation important?'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Fonts />
      <Button
        as='a'
        href='#articles'
        position='absolute'
        transform='translateX(-100%)'
        transition='transform 0.3s'
        _focus={{ transform: 'translateX(0%)' }}
      >
        Skip To Content
      </Button>
      <Header />

      <MainLayout>
        <Box as='section' outline='0' tabIndex={-1} w='100%'>
          <Box w='100%' mb={{ base: '32px', md: '64px', xl: '100px' }}>
            <Heading mb={4}>{title}</Heading>
            <Text fontSize='xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              voluptates consequatur nobis nulla sunt dolorum quisquam illo
              quod! Ipsam aut iste, illo et perspiciatis dolore? Ea quia
              dignissimos sapiente deserunt.
            </Text>
          </Box>
        </Box>
      </MainLayout>
      <Footer />
    </>
  )
}

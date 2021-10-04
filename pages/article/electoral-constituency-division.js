/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import data from '@/assets/data/articles.js'
import { useRouter } from 'next/router'
import Header from '../homepage/header'
import Footer from '../homepage/footer'
import {
  Box,
  Button,
  Heading,
  Text,
  Link,
  Stack,
  Table,
  Thead,
  Tbody,
  UnorderedList,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react'
import { Fonts } from '@/utils/Fonts'
import { MainLayout } from '@/components/layout'
import Head from 'next/head'
import { Bullet, Heading2, Heading3 } from '@/components/typography'

export default function Article() {
  // const [articles, setArticles] = useState(data)

  const router = useRouter()
  const { articleSlug } = router.query

  const title = 'Electoral constituency division '

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
            <Heading mb={7} as='h1'>
              {title}
            </Heading>
            <Text mb='1em'>
              165 members in the lower house of the parliament in Nepal are
              elected from 165 different electoral constituencies around the
              country through the FPTP system discussed earlier. Why 165? Well,
              that's a broader question. Before we dive deep into it, let us
              gain an initial understanding of the present division. Electoral
              constituencies in Nepal have been divided giving 90% weightage to
              population of a particular district and 10% weightage to the
              geography of the district. The Constitution Delineation
              Committee(CDC) submitted a report in 2017 with 165 constituencies
              after what has been quoted to be a "thorough consideration of
              factors like geography, population, social diversity and laws." An
              additional provision also exists such that each district gets at
              least one constituency.
            </Text>
          </Box>
        </Box>
      </MainLayout>
      <Footer />
    </>
  )
}

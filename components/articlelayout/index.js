import data from '@/assets/data/articles.js'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/layout'
import { Fonts } from '@/utils/Fonts'
import { MainLayout } from '@/components/layout'
import Head from 'next/head'
import { Heading3 } from '@/components/typography'
import { ArticleCardAside } from '@/components/articlecard2'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'

export default function ArticleLayout({ children, title }) {
  const { hoverLight2 } = useColorSwitcher()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Fonts />
      {/* <Button
        as='a'
        href='#articles'
        position='absolute'
        transform='translateX(-100%)'
        transition='transform 0.3s'
        _focus={{ transform: 'translateX(0%)' }}
      >
        Skip To Content
      </Button> */}
      <Header />

      <MainLayout>
        <section className='gridd'>
          <Box as='main' outline='0' tabIndex={-1} w='100%'>
            <Box w='100%' mb={{ base: '32px', md: '64px', xl: '100px' }}>
              <Heading as='h1' mb={7}>
                {title}
              </Heading>
              {children}
            </Box>
          </Box>
          <Box
            as='aside'
            className='hide'
            borderRadius='8px'
            height='fit-content'
            bg={hoverLight2}
            px='1em'
            pt='0.5rem'
            pb='0.5rem'
          >
            <Heading3>More Articles</Heading3>
            {data.map(({ title, description, id, slug }) => {
              return (
                <ArticleCardAside
                  key={id}
                  title={title}
                  description={description}
                  slug={slug}
                />
              )
            })}
          </Box>
        </section>
      </MainLayout>
      <Footer />
    </>
  )
}

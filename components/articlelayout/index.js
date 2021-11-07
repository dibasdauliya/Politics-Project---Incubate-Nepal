/* eslint-disable @next/next/no-img-element */
import data from '@/assets/data/articles.js'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Box, Heading, Text } from '@chakra-ui/react'
import { Fonts } from '@/utils/Fonts'
import { MainLayout } from '@/components/layout'
import Head from 'next/head'
import { Body, Heading3 } from '@/components/typography'
import { ArticleCardAside } from '@/components/articlecard2'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'

export default function ArticleLayout({
  children,
  title,
  image = 'Change in Governance system2.jpeg',
  alt
}) {
  const { hoverLight2 } = useColorSwitcher()

  const description = data.filter((dta) => dta.title === title)
  console.log(description)

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
        <Box
          py='2em'
          // _before={{
          //   content: '""',
          //   bgImage: 'url(/bglight2.png)',
          //   bgSize: 'cover',
          //   pos: 'absolute',
          //   top: 0,
          //   right: 0,
          //   left: 0,
          //   bottom: 0,
          //   opacity: 0.9,
          //   borderRadius: '3em',
          //   zIndex: -999
          // }}
          as='header'
          mt='1.5em'
          className='post-header'
        >
          <Heading as='h1' mb={7}>
            {title}
          </Heading>
          <Text>{description[0].description}</Text>
          <img src={`/articles/${image}`} alt={alt} />
        </Box>
        <section className='gridd'>
          <Box as='main' outline='0' tabIndex={-1} w='100%'>
            <Box w='100%' mb={{ base: '32px', md: '64px', xl: '100px' }}>
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

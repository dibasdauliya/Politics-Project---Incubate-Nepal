import data from '@/assets/data/articles.js'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Box, Button, Heading, Text, Image } from '@chakra-ui/react'
import { Center, Flex, Grid, GridItem, Link, Stack } from '@chakra-ui/layout'
import { Fonts } from '@/utils/Fonts'
import { MainLayout } from '@/components/layout'
import Head from 'next/head'
import { Heading3 } from '@/components/typography'
import { ArticleCardAside } from '@/components/articlecard2'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'
import { ImageProfile } from '@/assets/images'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const AboutImage = ({ src, alt, role, twitter, linkedin }) => {
  const greyBg = useColorModeValue('neutral.300', 'neutral.500')
  const lightGreyBg = useColorModeValue('neutral.100', 'neutral.700')
  return (
    <Flex flexDir='column' justifyContent='center' alignItems='center'>
      <Box
        bg={lightGreyBg}
        rounded='full'
        display='grid'
        placeItems='center'
        p='8px'
        mb='0.5em'
      >
        <Box bg={greyBg} rounded='full' display='flex' gridGap='1em' p='8px'>
          <ImageProfile src={src} alt={alt} />
        </Box>
      </Box>
      <Center fontWeight='bold'>{alt}</Center>
      <Center fontWeight='normal'>{role}</Center>
      <Center mt='0.5em' display='flex' gridGap='0.5em'>
        <Link
          href={`https://www.twitter.com/${twitter}`}
          target='_blank'
          rel='referrer noopener'
        >
          <FaTwitter />
        </Link>
        <Link
          href={`https://www.linkedin.com/${linkedin}`}
          target='_blank'
          rel='referrer noopener'
        >
          <FaLinkedin />
        </Link>
      </Center>
    </Flex>
  )
}

export default function About() {
  const { hoverLight2 } = useColorSwitcher()

  const title = 'About Us'
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Fonts />
      <Header />

      <MainLayout>
        <Box as='main' outline='0' tabIndex={-1} w='100%'>
          <Box w='100%' mb={{ base: '32px', md: '64px', xl: '100px' }}>
            <Heading as='h1' mb={7}>
              {title}
            </Heading>
            <Text mb='1.5em'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              vel expedita autem maiores quod culpa libero facere ab, omnis
              perferendis suscipit natus et quae repellat sequi reiciendis
              fugiat ut cumque amet? Quidem delectus, assumenda amet harum
              voluptatibus ipsam nemo saepe!
            </Text>
            <Heading3>Our Team</Heading3>
            {/* <Flex>
              <Image
                src='/dibas.jpg'
                width='300px'
                height='300px'
                alt='Dibas Dauliya'
                objectFit='cover'
                boxSize={450}
              />
            </Flex> */}
            <Flex
              justifyContent='center'
              flexWrap='wrap'
              gridGap='1.5em'
              mb='2em'
            >
              <AboutImage
                src='bhusan-dai.jpg'
                alt='Bhusal Suwal'
                role='Mentor'
                twitter='twitter'
                linkedin='linkedin'
              />
              <AboutImage
                src='logo-noborder.png'
                alt='Aayushka Budhathoki'
                role='Co-mentor'
                twitter='twitter'
                linkedin='linkedin'
              />
            </Flex>

            <Flex
              alignContent='center'
              alignItems='center'
              justifyContent='center'
              gridGap='1.5em'
              //   direction={{ base: 'column-reverse', xl: 'row' }}
              flexWrap='wrap'
              width='70%'
              mx='auto'
            >
              <AboutImage
                src='logo-noborder.png'
                alt='Aayusha Dhungana'
                role='role'
                twitter='twitter'
                linkedin='linkedin'
              />
              <AboutImage
                src='logo-noborder.png'
                alt='Bikash Agrawal'
                role='role'
                twitter='twitter'
                linkedin='linkedin'
              />
              <AboutImage
                src='logo-noborder.png'
                alt='Dibas Dauliya'
                role='role'
                twitter='twitter'
                linkedin='linkedin'
              />
              <AboutImage
                src='logo-noborder.png'
                alt='Manoj Dhakal'
                role='role'
                twitter='twitter'
                linkedin='linkedin'
              />
              <AboutImage
                src='logo-noborder.png'
                alt='Rojeena Thapa'
                role='role'
                twitter='twitter'
                linkedin='linkedin'
              />
              <AboutImage
                src='logo-noborder.png'
                alt='Lajju Shrestha'
                role='role'
                twitter='twitter'
                linkedin='linkedin'
              />
            </Flex>
          </Box>
        </Box>
      </MainLayout>
      <Footer />
    </>
  )
}

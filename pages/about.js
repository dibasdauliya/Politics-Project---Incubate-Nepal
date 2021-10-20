/* eslint-disable react/no-unescaped-entities */
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
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'

const AboutImage = ({
  src,
  alt,
  role,
  twitter,
  linkedin,
  insta,
  facebook,
  youtube
}) => {
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
      <Center
        textAlign='center'
        fontWeight='normal'
        dangerouslySetInnerHTML={{ __html: role }}
      />
      <Center mt='0.5em' display='flex' gridGap='0.5em'>
        {twitter !== undefined && (
          <Link
            href={`https://www.twitter.com/${twitter}`}
            target='_blank'
            rel='referrer noopener'
          >
            <FaTwitter />
          </Link>
        )}

        {insta !== undefined && (
          <Link
            href={`https://www.instagram.com/${insta}`}
            target='_blank'
            rel='referrer noopener'
          >
            <FaInstagram />
          </Link>
        )}

        {youtube !== undefined && (
          <Link
            href={`https://www.youtube.com/channel/${youtube}`}
            target='_blank'
            rel='referrer noopener'
          >
            <FaYoutube />
          </Link>
        )}

        {facebook && (
          <Link
            href={`https://www.facebook.com/${facebook}`}
            target='_blank'
            rel='referrer noopener'
          >
            <FaFacebook />
          </Link>
        )}

        <Link
          href={`https://www.linkedin.com/in/${linkedin}`}
          target='_blank'
          rel='referrer noopener'
        >
          <FaLinkedin />
        </Link>
      </Center>
    </Flex>
  )
}

const TeamCard = ({
  fd,
  children,
  src,
  alt,
  role,
  twitter,
  linkedin,
  insta,
  facebook,
  youtube
}) => {
  return (
    <Flex
      gridGap='1.3em'
      justifyContent='center'
      flexWrap='wrap'
      mb='2em'
      flexDirection={fd ? fd : 'row'}
    >
      <AboutImage
        src={src}
        alt={alt}
        role={role}
        twitter={twitter}
        linkedin={linkedin}
        insta={insta}
        facebook={facebook}
        youtube={youtube}
      />
      <Text alignSelf='center' width='60ch'>
        {children}
      </Text>
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
        <Box as='main' outline='0' tabIndex={-1} w='100%' mt='1.5em'>
          <Box w='100%' mb={{ base: '32px', md: '64px', xl: '100px' }}>
            <Heading as='h1' mb={7}>
              {title}
            </Heading>
            <Text mb='1.5em'>
              The six of us were fortunate enough to be a part of the second
              chapter of Incubate Nepal: an 8-week long virtual program that
              connects some of the most talented students from all over Nepal to
              collaborate on open ended projects. Mentored by our very own
              Bhushan Suwal dai and Co-mentored by Aayushka Budhathoki, the
              project focuses on the Representation in the Legislative
              Parliament of Nepal. What started with countless of layman
              opinions about politics gradually consolidated into factual
              information and rational analysis. The group name "Team Samsad"
              which was initially titled for fun proved to be a thread which
              connected the group into a close knitted circle.
            </Text>
            <Heading3>Our Team</Heading3>

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

            <TeamCard
              src='aayusha.jpg'
              alt='Aayusha Dhungana'
              role='Researcher'
              facebook='shyana.ad'
              linkedin='aayusha-dhungana-ab773a206'
              // insta={undefined}
              // youtube={undefined}
            >
              Politics and social affairs were never something I preferred
              reading or discussing before. But, unexpectedly, this experience
              pushed me to dig into a wide range of the country's political
              situation that changed my overall perspective in this area. Also,
              getting to work with highly motivating and supportive teammates
              was one of the best parts of this program. VERY GRATEFUL!
            </TeamCard>

            <TeamCard
              src='bikash.jpg'
              alt='Bikash Agrawal'
              role='Researcher'
              twitter='Bikash219'
              linkedin='bikash-agrawal-436783219'
              // insta={undefined}
              // youtube={undefined}
              // facebook={undefined}
              fd='row-reverse'
            >
              As a student from science background, it was sort of a fun task to
              look into laws and politics but as we dig deeper it became clearer
              that there is much more to learn about our own country and its
              working mechanism. This journey became pleasant due to the
              presence of my lovely fellow travelers. I learnt a lot about
              working together.
            </TeamCard>

            <TeamCard
              src='dibas.jpg'
              alt='Dibas Dauliya'
              role='Researcher'
              // role='Researcher <br> and Website Developer'
              twitter='dibasdauliya33'
              linkedin='dibasdauliya'
              // insta={undefined}
              // youtube={undefined}
              // facebook={undefined}
            >
              This fantastic project helped me to be more social, improving my
              presentation and networking skills. I also elevated my
              problem-solving skills and learned more about researching the
              facts and dealing with the different perspectives of many articles
              by discussing them with energetic teammates. I am thankful to all
              the members for their inspiration and motivation.
            </TeamCard>

            <TeamCard
              src='manoj.jpg'
              alt='Manoj Dhakal'
              role='Researcher'
              youtube='UC9CnPyQQvPhZjY06GWREwPA'
              linkedin='manoj-dhakal-4950a71b7'
              // insta={undefined}
              // facebook={undefined}
              // twitter={undefined}
              fd='row-reverse'
            >
              This project made me realize how we have a general tendency to
              make opinions without things, without evidence. In addition to
              looking at my opinions, I now look at why I hold them.
            </TeamCard>

            <TeamCard
              src='rojeena.jpg'
              alt='Rojeena Thapa'
              role='Researcher'
              insta='rojeenaa_'
              linkedin='rojeena-thapa-3b144a214'
              // facebook={undefined}
              // twitter={undefined}
              // youtube={undefined}
            >
              Incubate Nepal was an exhilarating process for me. What I thought
              to be a rigorous project was all about fun discussions, common
              conclusions and gaining an insight of the political system of
              Nepal. Apart from the main project itself, grateful to have formed
              amazing connections with such talented teammates.
            </TeamCard>

            <TeamCard
              src='lajju.jpg'
              alt='Lajju Shrestha'
              role='Researcher'
              insta='lazzu_sth'
              linkedin='lajju-shrestha-she-her-b561301b0'
              // facebook={undefined}
              // twitter={undefined}
              // youtube={undefined}
              fd='row-reverse'
            >
              This 8-week long project was an insightful journey where I was not
              only able to connect and work with intellectuals but also learn
              about multiple existing laws, gain insights about various topics,
              and be a part of the discussion, which is often neglected in our
              society. This project shaped my perspective about the different
              aspect that is considered while making national-level policies.
            </TeamCard>
          </Box>
        </Box>
      </MainLayout>
      <Footer />
    </>
  )
}

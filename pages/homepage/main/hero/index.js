import React from 'react'
import { Box, Heading, Center } from '@chakra-ui/react'
import { Body } from '@/components/typography'
import { CircleArray } from '@/assets/motion/CircleArray'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'

const Hero = ({ ...props }) => {
  const { secondary, primary } = useColorSwitcher()

  return (
    <Box {...props}>
      <section className='grid'>
        <Box as='section'>
          <Heading
            fontSize='5vw'
            bgGradient={`linear(to-l, ${primary}, ${secondary})`}
            bgClip='text'
            marginBottom='0.2em'
          >
            Team Samsad
          </Heading>
          <Body
            w={{ base: '90%', xl: '80%' }}
            bg={{
              base: 'red.200',
              xs: 'yellow.200',
              sm: 'blue.200',
              md: 'green.200'
            }}
            fontWeight='bold'
          >
            Description k lekhne? ani title.. ani logo... Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptate nulla quas totam, quo
            quibusdam cupiditate odio iure eligendi ipsum aliquam?
          </Body>
        </Box>

        <Center>
          <CircleArray
            strokeWidth='0.5px'
            fill={secondary}
            stroke={secondary}
            className='bubbles'
            boxSize={{ base: '15em', md: '22em' }}
          />
        </Center>
        {/* <SpinBall /> */}
      </section>
    </Box>
  )
}

export default Hero

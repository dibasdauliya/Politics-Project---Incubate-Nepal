import React from 'react'
import { Box, Text, Center, Button, useColorMode } from '@chakra-ui/react'
import { Body, TopHeading } from '@/components/typography'
import { CircleArray } from '@/assets/motion/CircleArray'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const Hero = ({ ...props }) => {
  const { secondary, primary } = useColorSwitcher()

  const { colorMode, toggleColorMode } = useColorMode()

  const light = colorMode === 'light'

  return (
    <Box {...props}>
      <section className='grid'>
        <Box as='section'>
          <TopHeading
            fontSize='5vw'
            bgGradient={`linear(to-l, ${primary}, ${secondary})`}
            bgClip='text'
            marginBottom='0.5em'
          >
            Team Samsad
          </TopHeading>
          <Text fontSize='md' marginBottom='1em'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ea
            mollitia iste cupiditate, consequuntur dolore quis tenetur et
            veritatis! Quis, recusandae? Error inventore aut sequi, dolor
            doloribus, assumenda eius nisi sapiente aliquid vero esse asperiores
            animi quod obcaecati? Temporibus, reiciendis.
          </Text>
          <Button
            bgColor={secondary}
            _hover={{ opacity: 0.9 }}
            textColor={`${light ? 'white' : 'black'}`}
            borderRadius='full'
            py='1.5em'
            leftIcon={<FontAwesomeIcon icon={faPlayCircle} />}
          >
            Lorem ipsum
          </Button>
          {/* <Body
            w={{ base: '90%', xl: '80%' }}
            bg={{
              base: 'red.200',
              xs: 'yellow.200',
              sm: 'blue.200',
              md: 'green.200'
            }}
            fontWeight='bold'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ea
            mollitia iste cupiditate, consequuntur dolore quis tenetur et
            veritatis! Quis, recusandae? Error inventore aut sequi, dolor
            doloribus, assumenda eius nisi sapiente aliquid vero esse asperiores
            animi quod obcaecati? Temporibus, reiciendis.
          </Body> */}
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

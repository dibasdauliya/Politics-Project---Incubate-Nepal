import React from 'react'
import { Box, Text, Center, Button, useColorMode } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@chakra-ui/modal'
import { useDisclosure } from '@chakra-ui/hooks'
import { Body, TopHeading } from '@/components/typography'
import { CircleArray } from '@/assets/motion/CircleArray'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'
import { FaPlayCircle } from 'react-icons/fa'
import { Image } from '@chakra-ui/image'

const Hero = ({ ...props }) => {
  const { secondary, primary } = useColorSwitcher()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { colorMode } = useColorMode()

  const light = colorMode === 'light'

  return (
    <Box
      {...props}
      pos='relative'
      // w='100%'
      h='400px'
      _before={{
        content: '""',
        bgImage: 'url(/bglight2.png)',
        bgSize: 'cover',
        pos: 'absolute',
        // opacity: '0.5',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0.9,
        borderRadius: '3em',
        zIndex: -999
      }}
      className='bgImage'
    >
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
          <Text fontSize='1.3em' marginBottom='1.5em' fontWeight='extrabold'>
            Our research mainly focuses on studying the representation of
            minorities and underrepresented in the legislative parliament of
            Nepal. It tries to understand the structure of federal parliament
            and understand how changes in those structures can impact the
            representation of people in the parliament.
          </Text>
          <Button
            bgColor={secondary}
            _hover={{ opacity: 0.9 }}
            textColor={`${light ? 'white' : 'black'}`}
            borderRadius='full'
            py='1.5em'
            onClick={onOpen}
            leftIcon={<FaPlayCircle />}
          >
            Introduction Video
          </Button>
          <Modal onClose={onClose} size='xl' isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              {/* <ModalHeader>Introduction of our project</ModalHeader> */}
              <ModalHeader>We are Team Samsad</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <iframe
                  width='100%'
                  height='350px'
                  src='https://www.youtube-nocookie.com/embed/4HBihlP64eI?autoplay=1'
                  // src='https://www.youtube-nocookie.com/embed/4HBihlP64eI?autoplay=1&amp;start=21'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
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

        <Center className='bubbles'>
          {/* <Image src='/bglight.png' borderRadius='5em' /> */}
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

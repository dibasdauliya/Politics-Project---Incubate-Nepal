import {
  Box,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import { ImageProfile } from '../../../../assets/images'
import SpherePulse from '../../../../assets/motion/SpherePulse'
import { Line, SectionHeader } from '../../../../components/layout'
import {
  Body,
  BodyLink,
  Bullet,
  Heading2,
  Heading3,
  Title
} from '../../../../components/typography'
import useColorSwitcher from '../../../../utils/hooks/useColorSwitcher'

const Lorem = ({ ...props }) => {
  const greyBg = useColorModeValue('neutral.300', 'neutral.500')
  const lightGreyBg = useColorModeValue('neutral.100', 'neutral.700')
  const { secondary } = useColorSwitcher()

  return (
    <Box as='section' outline='0' tabIndex={-1} {...props} w='100%'>
      <Box w='100%' mb={{ base: '32px', md: '64px', xl: '100px' }}>
        <SectionHeader sibling={<Line />} mr='16px'>
          <Flex alignItems='center' alignContent='center'>
            <SpherePulse fontSize='2em' />
            <Title mx='15px'>About</Title>
          </Flex>
        </SectionHeader>
      </Box>
      <Stack
        align='flex-start'
        spacing={16}
        direction={{ base: 'column-reverse', xl: 'row' }}
        justify={{ base: 'space-between', xl: 'space-evenly' }}
      >
        <Box
          bg={lightGreyBg}
          rounded='full'
          display='grid'
          placeItems='center'
          p={{ base: '8px', md: '16px' }}
        >
          <Box
            bg={greyBg}
            rounded='full'
            display='grid'
            placeItems='center'
            p={{ base: '8px', md: '16px' }}
          >
            <ImageProfile />
          </Box>
        </Box>
        <Stack spacing={12} p='8px' w={{ base: '100%', xl: '50%' }}>
          <Body mb='1em'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            iste consequatur libero deleniti voluptates nostrum veniam atque
            consequuntur illum error quo exercitationem soluta in ex enim illo,
            consectetur dignissimos rem delectus accusantium commodi quos
            aspernatur eligendi. Corporis itaque modi blanditiis unde quia
            cumque repellat in.
          </Body>
          <Body mb='2em'>
            Quo exercitationem soluta in ex enim illo, consectetur dignissimos
            rem delectus accusantium commodi quos aspernatur eligendi. Corporis
            itaque modi blanditiis unde quia cumque repellat in.
          </Body>
          <Box>
            <Heading3>
              Lorem ipsum dolor sit amet consectetur adipisicing:
            </Heading3>
            <Stack as='ul'>
              <Bullet as='li'>Lorem ipsum dolor sit amet.</Bullet>
              <Bullet as='li'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Bullet>
              <Bullet as='li'>Lorem, ipsum.</Bullet>

              {/* <Bullet as='li'>
                Starting the{' '}
                <Link
                  color={secondary}
                  textDecor='underline'
                  href='https://chingu.io/'
                >
                  Chingu Voyage 28
                </Link>
              </Bullet> */}
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Lorem

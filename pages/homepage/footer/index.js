import React from 'react'
import {
  Box,
  Heading,
  Icon,
  Link,
  Stack,
  useColorModeValue,
  Center
} from '@chakra-ui/react'
import useColorSwitcher from '../../../utils/hooks/useColorSwitcher'
import {
  IconDev,
  IconLinkedin,
  IconTwitch,
  IconTwitter,
  IconYoutube,
  IconGithubAlt
} from '../../../assets/icons/imported/IconSocials'
import { IconGithub } from '../../../assets/icons'

const Footer = () => {
  return (
    <Box as='footer' mb='32px'>
      <Center p='16px'>
        Team Samsad &copy; {new Date().getFullYear()}. All Rights Reserved.
      </Center>
    </Box>
  )
}

export default Footer

import React from 'react'
import { Box, Center } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as='footer' mb='32px' mx={4}>
      <Center p='16px'>
        Team Samsad &copy; {new Date().getFullYear()}. All Rights Reserved.
      </Center>
    </Box>
  )
}

export default Footer

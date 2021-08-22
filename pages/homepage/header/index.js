import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '@/components/navbar/Navbar'

const Header = () => {
  return (
    <Box as='header' w='100%' h={{ base: '96px', md: '120px' }}>
      <Navbar />
    </Box>
  )
}

export default Header

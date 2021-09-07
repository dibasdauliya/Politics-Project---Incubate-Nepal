import { Box } from '@chakra-ui/react'
import React from 'react'

const MainLayout = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      minH={{ base: '540px' }}
      as='main'
      // w={{ base: "100vw", md: "90vw", lg: "80vw" }}
      maxW='1200px'
      px='44px'
      m='auto'
    >
      {children}
    </Box>
  )
}

export default MainLayout

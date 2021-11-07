import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '@/components/navbar/Navbar'
import { useColorMode } from '@chakra-ui/color-mode'

const Header = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      as='header'
      w='100%'
      // h={{ base: '96px', md: '120px' }}
      position='sticky'
      top='0'
      zIndex='999'
      background={`${colorMode === 'light' ? '#FCFCFC' : '#232323'}`}
    >
      <Navbar
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
    </Box>
  )
}

export default Header

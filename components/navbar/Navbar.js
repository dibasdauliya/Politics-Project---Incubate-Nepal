import React from 'react'
import { Flex, useColorMode, IconButton, Icon } from '@chakra-ui/react'
import { FaMoon } from 'react-icons/fa'
import { MdWbSunny } from 'react-icons/md'
import NavMenu from './NavMenu'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'

const Navbar = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { colorLight, colorDark, secondary } = useColorSwitcher()

  const light = colorMode === 'light'

  const ThemeIcon = () => (
    <Icon w='28px' h='28px' as={colorMode === 'light' ? FaMoon : MdWbSunny} />
  )

  return (
    <Flex
      m='auto'
      p='.5em'
      w={{ base: '100%', md: '90%', lg: '80%' }}
      my='3'
      justify='space-between'
      align='center'
      direction='row'
      position='relative'
    >
      <NavMenu />

      <Icon
        order={{ lg: -1 }}
        stroke={colorDark}
        strokeWidth='2px'
        p='8px'
        w='64px'
        h='64px'
        viewBox='0 0 200 200'
        color={secondary}
      >
        <path
          fill='currentColor'
          d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
        />
      </Icon>

      <IconButton
        aria-label={`Toggle ${light ? 'dark' : 'light'} mode`}
        title={`Toggle ${light ? 'dark' : 'light'} mode`}
        w='64px'
        h='64px'
        onClick={toggleColorMode}
        colorScheme={colorLight}
        color={colorDark}
        icon={<ThemeIcon />}
      />
    </Flex>
  )
}

export default Navbar

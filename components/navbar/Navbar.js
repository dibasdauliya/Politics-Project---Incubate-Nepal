import React from 'react'
import { Flex, useColorMode, IconButton, Icon, Link } from '@chakra-ui/react'
import { FaMoon } from 'react-icons/fa'
import { MdWbSunny } from 'react-icons/md'
import NavMenu from './NavMenu'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'
import NextLink from 'next/link'
import Image from 'next/image'

const Navbar = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { colorLight, colorDark, secondary } = useColorSwitcher()

  const light = colorMode === 'light'

  React.useEffect(() => {
    document.documentElement.setAttribute(
      'data-color-scheme',
      colorMode === 'light' ? 'light' : 'dark'
    )
  }, [colorMode])

  const ThemeIcon = () => (
    <Icon w='28px' h='28px' as={colorMode === 'light' ? FaMoon : MdWbSunny} />
  )

  return (
    <Flex
      m='auto'
      py='.5em'
      px='20px'
      maxW='1200px'
      // w={{ base: '100%', md: '90%', lg: '80%' }}
      // mt='3'
      justify='space-between'
      align='center'
      direction='row'
      // position='relative'
    >
      <NavMenu
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <NextLink to='/' href='/' passHref={true}>
        <Link order={{ lg: -1 }} mt='0.5em'>
          {/* <Icon
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
          </Icon> */}
          <Image
            src='/logo.png'
            alt='Logo of Team Samsad'
            width='70px'
            height='70px'
          />
        </Link>
      </NextLink>

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

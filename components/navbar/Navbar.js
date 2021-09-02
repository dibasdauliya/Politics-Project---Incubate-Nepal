import React from 'react'
import {
  Flex,
  useColorMode,
  IconButton,
  Icon,
  Link,
  Image
} from '@chakra-ui/react'
import { FaMoon } from 'react-icons/fa'
import { MdWbSunny } from 'react-icons/md'
import NavMenu from './NavMenu'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'
import NextLink from 'next/link'
import NextImage from 'next/image'

const Navbar = () => {
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

      <NextLink to='/' href='/' passHref={true}>
        <Link order={{ lg: -1 }}>
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
            objectFit='cover'
            boxSize='70px'
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

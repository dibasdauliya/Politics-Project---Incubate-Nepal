import React, { useState } from 'react'
import {
  Box,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  useDisclosure,
  UnorderedList
} from '@chakra-ui/react'
import useColorSwitcher from '../../utils/hooks/useColorSwitcher'
import SideNav from './SideNav'
import NextLink from 'next/link'

const NavMenu = ({ onOpen, aboutRef, skillsRef, projectsRef, contactRef }) => {
  const { isOpen, onClose } = useDisclosure()
  const [toRef, setToRef] = useState()

  const handleClick = (child) => {
    if (child === 'about') {
      aboutRef.current.focus({ preventScroll: true })
      setToRef(aboutRef)
    }
    if (child === 'skills') {
      skillsRef.current.focus({ preventScroll: true })
      setToRef(skillsRef)
    }
    if (child === 'projects') {
      projectsRef.current.focus({ preventScroll: true })
      setToRef(projectsRef)
    }
    if (child === 'contact') {
      contactRef.current.focus({ preventScroll: true })
      setToRef(contactRef)
    }
  }

  return (
    <Box as='nav'>
      <FullNav>
        <NavMenuItem>item</NavMenuItem>
        <NavMenuItem>item2</NavMenuItem>
        <NavMenuItem>item3</NavMenuItem>
        <NavMenuItem>item4</NavMenuItem>
      </FullNav>
      <SideNav toRef={toRef} isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <NavMenuItem handleClick={handleClick}>item</NavMenuItem>
        <NavMenuItem handleClick={handleClick}>item2</NavMenuItem>
        <NavMenuItem handleClick={handleClick}>item3</NavMenuItem>
        <NavMenuItem handleClick={handleClick}>item4</NavMenuItem>
      </SideNav>
    </Box>
  )
}

const FullNav = ({ children }) => {
  return (
    <Stack as='ul' direction='row' display={{ base: 'none', lg: 'flex' }}>
      {children}
    </Stack>
  )
}

const NavMenuItem = ({ children }) => {
  const { secondary } = useColorSwitcher()

  return (
    <UnorderedList>
      <ListItem
        p='0.25em'
        listStyleType='none'
        fontSize={{ base: 'xl', lg: 'lg' }}
        fontWeight='semibold'
        textAlign='center'
        mx={{ lg: '1.5em' }}
      >
        <Link
          _hover={{ color: secondary, textDecoration: 'none' }}
          href={`#${children}`}
        >
          {children}
        </Link>
      </ListItem>
    </UnorderedList>
  )
}

export default NavMenu

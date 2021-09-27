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

const NavMenu = ({
  onOpen,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
  ...props
}) => {
  const { isOpen, onClose } = useDisclosure()
  const [toRef, setToRef] = useState()

  const handleClick = (child) => {
    if (child === 'About') {
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
      <FullNav handleClick={handleClick} {...props}>
        <NavMenuItem>Articles</NavMenuItem>
        <NavMenuItem>Slider</NavMenuItem>
        <NavMenuItem>Quiz</NavMenuItem>
        <NavMenuItem>About</NavMenuItem>
      </FullNav>
      <SideNav toRef={toRef} isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <NavMenuItem>Articles</NavMenuItem>
        <NavMenuItem>Slider</NavMenuItem>
        <NavMenuItem>Quiz</NavMenuItem>
        <NavMenuItem>About</NavMenuItem>
      </SideNav>
    </Box>
  )
}

const FullNav = ({ handleClick, children, ...props }) => {
  return (
    <Stack
      as='ul'
      {...props}
      direction='row'
      display={{ base: 'none', lg: 'flex' }}
    >
      {children}
    </Stack>
  )
}

const NavMenuItem = ({ handleClick, children, ...props }) => {
  const { secondary } = useColorSwitcher()
  const isRef = () => {
    if (children === 'About') {
      return 1000
    }
    if (children === 'skills') {
      return 1250
    }
    if (children === 'projects') {
      return 1500
    }
    if (children === 'contact') {
      return 2000
    }
  }
  return (
    <UnorderedList>
      <ListItem
        {...props}
        p='0.25em'
        listStyleType='none'
        fontSize={{ base: 'xl', lg: 'lg' }}
        fontWeight='semibold'
        textAlign='center'
        mx={{ lg: '1.5em' }}
      >
        <Link
          _hover={{ color: secondary, textDecoration: 'none' }}
          href={`/#${children.toLowerCase()}`}
        >
          {children}
        </Link>
      </ListItem>
    </UnorderedList>
  )
}

export default NavMenu

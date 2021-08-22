import React, { useRef } from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'
import { Button } from '@chakra-ui/react'

const Homepage = () => {
  return (
    <>
      <Button
        as='a'
        href='#articles'
        position='absolute'
        transform='translateX(-100%)'
        transition='transform 0.3s'
        _focus={{ transform: 'translateX(0%)' }}
      >
        Skip To Content
      </Button>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Homepage

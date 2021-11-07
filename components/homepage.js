import React from 'react'
import Header from '@/components/header'
import Main from './main'
import Footer from '@/components/footer'
import { Button } from '@chakra-ui/react'

const Homepage = () => {
  return (
    <>
      <Button
        as='a'
        href='#quiz'
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

import React from 'react'
import Hero from './hero'
import { MainLayout } from '@/components/layout'
import { SkipNavContent } from '@chakra-ui/skip-nav'
import Articles from './articles'
import Lorem from './lorem'

const Main = () => {
  return (
    <MainLayout>
      <Hero
        mt={{ base: '12vh', xxl: '16vh', xxxl: '32vh' }}
        mb={{ base: '25vh', md: '30vh', xl: '30vh' }}
        w={{ xl: '90%' }}
      />
      <SkipNavContent>
        <Articles id='articles' mb='30vh' />
      </SkipNavContent>
      <Lorem id='lorem' mb='30vh' />
      {/* <Skills ref={skillsRef} id="skills" pt="10vh" mb="25vh" />
      <Projects ref={projectsRef} id="projects" pt="10vh" mb="25vh" />
      <Contact ref={contactRef} id="contact" pt="10vh" mb="25vh" /> */}
    </MainLayout>
  )
}

export default Main

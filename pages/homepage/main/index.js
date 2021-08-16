import React from 'react'
import About from './about'
import Hero from './hero'
import { MainLayout } from '@/components/layout'
import { SkipNavContent } from '@chakra-ui/skip-nav'

const Main = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  return (
    <MainLayout>
      <Hero
        mt={{ base: '12vh', xxl: '16vh', xxxl: '32vh' }}
        mb={{ base: '25vh', md: '30vh', xl: '30vh' }}
        w={{ xl: '90%' }}
      />
      {/* <SkipNavContent>
        <About ref={aboutRef} id="about" pt="10vh" mb="30vh" />
      </SkipNavContent> */}
      {/* <Skills ref={skillsRef} id="skills" pt="10vh" mb="25vh" />
      <Projects ref={projectsRef} id="projects" pt="10vh" mb="25vh" />
      <Contact ref={contactRef} id="contact" pt="10vh" mb="25vh" /> */}
    </MainLayout>
  )
}

export default Main

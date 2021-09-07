import React from 'react'
import Hero from './hero'
import { MainLayout } from '@/components/layout'
import { SkipNavContent } from '@chakra-ui/skip-nav'
import Articles from './articles'
import Lorem from './lorem'
import SliderPart from './slider'

const Main = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  return (
    <MainLayout>
      <Hero
        mt={{ base: '8vh', xxl: '16vh', xxxl: '32vh' }}
        mb={{ base: '25vh', md: '30vh', xl: '30vh' }}
        w={{ xl: '90%' }}
      />
      <SkipNavContent>
        <Articles id='articles' mb='30vh' />
      </SkipNavContent>
      <SliderPart id='slider' mb='30vh' />
      <Lorem id='about' mb='30vh' ref={aboutRef} />

      {/* <Skills ref={skillsRef} id="skills" pt="10vh" mb="25vh" />
      <Projects ref={projectsRef} id="projects" pt="10vh" mb="25vh" />
      <Contact ref={contactRef} id="contact" pt="10vh" mb="25vh" /> */}
    </MainLayout>
  )
}

export default Main

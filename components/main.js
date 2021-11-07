import React from 'react'
import Hero from './hero'
import { MainLayout } from '@/components/layout'
import { SkipNavContent } from '@chakra-ui/skip-nav'
import Articles from './articles'
import SliderPart from './slider'
import Quiz from './quiz'
import Highlights from './highlights'
import Interview from './interview'

const Main = () => {
  return (
    <MainLayout>
      <Hero
        mt={{ base: '8vh', xxl: '16vh', xxxl: '32vh' }}
        mb={{ base: '25vh', md: '30vh', xl: '30vh' }}
        w={{ xl: '90%' }}
      />
      <SkipNavContent>
        <Quiz id='quiz' mb='20vh' />
      </SkipNavContent>
      <Highlights id='highlights' mb='20vh' />
      <Articles id='articles' mb='20vh' />
      <Interview id='interview' mb='20vh' />
      <SliderPart id='slider' mb='20vh' />
    </MainLayout>
  )
}

export default Main

/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import SpherePulse from '@/assets/motion/SpherePulse'
import { Line, SectionHeader } from '@/components/layout'
import { Title } from '@/components/typography'
import { Link, List, ListIcon, ListItem, OrderedList } from '@chakra-ui/layout'
import CBullet from '@/components/typography/bullet'
import NextLink from 'next/link'

import useColorSwitcher from '@/utils/hooks/useColorSwitcher'

const Interview = ({ ...props }) => {
  const { secondary } = useColorSwitcher()

  return (
    <Box
      sx={{ scrollMarginTop: '7em' }}
      as='section'
      outline='0'
      tabIndex={-1}
      {...props}
      w='100%'
    >
      <Box w='100%' mb={{ base: '20px', md: '45px', xl: '70px' }}>
        <SectionHeader sibling={<Line />} mr='16px'>
          <Flex alignItems='center' alignContent='center'>
            <SpherePulse fontSize='2em' />
            <Title mx='15px'>Interview</Title>
          </Flex>
        </SectionHeader>
      </Box>

      <Flex gridGap='2em' flexWrap={{ base: 'wrap', lg: 'nowrap' }}>
        <Box width='100%'>
          <iframe
            width='100%'
            height='315'
            src='https://www.youtube-nocookie.com/embed/5eDhISctB9c'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </Box>

        <Box flexBasis='75em'>
          <Text>
            Mr. Yagya Raj Pandey has completed his BALLB from Nepal Law Campus.
            He is pursuing an LLM from Ratna Rajya Laxmi Campus in Journalism
            and Mass Communications. He has also completed a Bachelor’s degree
            in Political Science and Journalism. He is also involved in Image
            Television as a news reporter and producer. He is also the content
            editor of lexnepal.com, Nepal’s first legal portal. He has been
            teaching law in Bachelor Entrance Examination Preparation for five
            years. Mr. Pandey started a YouTube channel because he thinks the
            language of law has been jargonized and made hard for the general
            public to understand. He aims to make it easy for normal citizens.{' '}
            <Link color={secondary} variant='link'>
              <NextLink href='/interview'>Read more</NextLink>
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Interview

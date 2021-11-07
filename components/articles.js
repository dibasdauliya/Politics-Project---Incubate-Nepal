/* eslint-disable react/no-unescaped-entities */
import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import data from '@/assets/data/articles.js'
import SpherePulse from '@/assets/motion/SpherePulse'
import { Line, SectionHeader } from '@/components/layout'
import { Title } from '@/components/typography'
import { ArticleCard } from '@/components/articlecard'

import 'swiper/css'
import 'swiper/css/pagination'

import SwiperCore, { Pagination } from 'swiper'

SwiperCore.use([Pagination])

const Articles = ({ ...props }) => {
  const [articles, setArticles] = useState(data)
  const [show, setShow] = useState(false)

  function showHide() {
    setShow(!show)
  }

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
            <Title mx='15px'>Articles</Title>
          </Flex>
        </SectionHeader>
      </Box>

      {articles.map(({ title, description, id, slug }) => {
        return (
          <ArticleCard
            key={id}
            title={title}
            description={description}
            slug={slug}
          />
        )
      })}
    </Box>
  )
}

export default Articles

import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import data from '@/assets/data/articles.js'
import SpherePulse from '@/assets/motion/SpherePulse'
import { Line, SectionHeader } from '@/components/layout'
import { Title } from '@/components/typography'
import { ArticleCard } from '@/components/articlecard'

const Articles = ({ ...props }) => {
  const [articles, setArticles] = useState(data)

  return (
    <Box
      sx={{ scrollMarginTop: '7em' }}
      as='section'
      outline='0'
      tabIndex={-1}
      {...props}
      w='100%'
    >
      <Box w='100%' mb={{ base: '32px', md: '64px', xl: '100px' }}>
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

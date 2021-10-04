import React from 'react'
import { Box, Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Body, Heading3 } from '@/components/typography'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'

export const ArticleCard = ({ title, description, slug }) => {
  const { secondary, hoverLight2 } = useColorSwitcher()
  return (
    <Box
      bg={hoverLight2}
      borderRadius='8px'
      px='1em'
      mr='1em'
      pt='0.5rem'
      pb='1.3rem'
      mb='2em'
    >
      <Heading3>
        <NextLink
          href={`/article/${slug}`}
          to={`/article/${slug}`}
          passHref={true}
        >
          <Link color={secondary}>{title}</Link>
        </NextLink>
      </Heading3>
      <Body noOfLines={3}>{description}</Body>
    </Box>
  )
}

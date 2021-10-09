import React from 'react'
import { Box, Link, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Body, Heading3 } from '@/components/typography'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'

export const ArticleCardAside = ({ title, description, slug }) => {
  const { secondary, hoverLight2 } = useColorSwitcher()
  return (
    <>
      <Body>
        <NextLink
          href={`/article/${slug}`}
          to={`/article/${slug}`}
          passHref={true}
        >
          <Link color={secondary}>{title}</Link>
        </NextLink>
      </Body>
      <Text fontSize='sm' noOfLines={3} mb='1.5em'>
        {description}
      </Text>
    </>
  )
}

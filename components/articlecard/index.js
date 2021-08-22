import React from 'react'
import { Box, Link, useColorModeValue } from '@chakra-ui/react'
import { Body, Heading3 } from '@/components/typography'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'

export const ArticleCard = ({ title, description }) => {
  const { secondary, hoverLight2 } = useColorSwitcher()
  return (
    <Box
      bg={hoverLight2}
      borderRadius='8px'
      px='1em'
      pt='0.5rem'
      pb='1.3rem'
      mb='2em'
    >
      <Heading3>
        <Link color={secondary} href='#'>
          {title}
        </Link>
      </Heading3>
      <Body>{description}</Body>
    </Box>
  )
}

import useColorSwitcher from '@/utils/hooks/useColorSwitcher'
import { Box } from '@chakra-ui/layout'
import React from 'react'

const CBullet = () => {
  const { secondary } = useColorSwitcher()
  return (
    <Box
      display='inline-block'
      mr={2}
      background={secondary}
      boxSize={{ base: '8px', md: '10px', lg: '12px' }}
      rounded='full'
    />
  )
}

export default CBullet

import { CircleArray2 } from '@/assets/motion/CircleArray'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'

const SectionHeader = ({
  heading,
  sibling,
  reverse = false,
  children,
  ...props
}) => {
  const { secondary } = useColorSwitcher()

  const Sibling = () => sibling
  return (
    <Flex
      {...props}
      direction={reverse && 'row-reverse'}
      justify={sibling && 'space-between'}
      align='center'
    >
      {children}
      {sibling && <Sibling />}
      <CircleArray2
        zIndex='99'
        marginLeft='-3em'
        strokeWidth='0.5px'
        fill={secondary}
        stroke={secondary}
        className='bubbles2'
        boxSize={{ base: '8em', md: '10em', xl: '15em' }}
        pos='absolute'
        right={{ base: '1em', md: '1em', xl: '10em' }}
      />
    </Flex>
  )
}

export default SectionHeader

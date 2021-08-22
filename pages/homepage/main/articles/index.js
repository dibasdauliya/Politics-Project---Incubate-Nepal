import {
  Box,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import { ImageProfile } from '@/assets/images'
import SpherePulse from '@/assets/motion/SpherePulse'
import { Line, SectionHeader } from '@/components/layout'
import { Title } from '@/components/typography'
import { ArticleCard } from '@/components/articlecard'

const Articles = ({ ...props }) => {
  return (
    <Box as='section' outline='0' tabIndex={-1} {...props} w='100%'>
      <Box w='100%' mb={{ base: '32px', md: '64px', xl: '128px' }}>
        <SectionHeader sibling={<Line />} mr='16px'>
          <Flex alignItems='center' alignContent='center'>
            <SpherePulse fontSize='2em' />
            <Title mx='15px'>Articles</Title>
          </Flex>
        </SectionHeader>
      </Box>

      <ArticleCard
        title='Why would one prefer democracy over another form of government, say
            monarchy? What are the reasons Nepal became a democracy instead of a
            monarchy? Prior to 2007, Nepal was a constitutional monarchy. How is
            that different than monarchy, and why did the people of Nepal think
            it was inadequate compared to a democracy?'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          voluptates consequatur nobis nulla sunt dolorum quisquam illo quod!
          Ipsam aut iste, illo et perspiciatis dolore? Ea quia dignissimos
          sapiente deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          voluptates consequatur nobis nulla sunt dolorum quisquam illo quod!
          Ipsam aut iste, illo et perspiciatis dolore? Ea quia dignissimos
          sapiente deserunt.'
      />

      <ArticleCard
        title='Why is minority representation important?'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          voluptates consequatur nobis nulla sunt dolorum quisquam illo quod!
          Ipsam aut iste, illo et perspiciatis dolore? Ea quia dignissimos
          sapiente deserunt.'
      />

      <ArticleCard
        title='What are other forms of local government in Nepal? Specifically, what is the purpose of the Pradesh Sabhas? What were the conversations that led to Nepal adopting these systems?
'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          voluptates consequatur nobis nulla sunt dolorum quisquam illo quod!
          Ipsam aut iste, illo et perspiciatis dolore? Ea quia dignissimos
          sapiente deserunt.'
      />

      <ArticleCard
        title='What is Proportional Representation trying to achieve?'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          voluptates consequatur nobis nulla sunt dolorum quisquam illo quod!
          Ipsam aut iste, illo et perspiciatis dolore? Ea quia dignissimos
          sapiente deserunt.'
      />
    </Box>
  )
}

export default Articles

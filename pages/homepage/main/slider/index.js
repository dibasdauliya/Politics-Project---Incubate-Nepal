import {
  Box,
  Flex,
  Slider,
  SliderTrack,
  SliderThumb,
  Stack,
  Link
} from '@chakra-ui/react'
import React, { useState } from 'react'
import SpherePulse from '@/assets/motion/SpherePulse'
import { Line, SectionHeader } from '@/components/layout'
import { Title, Bullet, Heading3, Body } from '@/components/typography'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'

const SliderPart = ({ ...props }) => {
  const { secondary, primary } = useColorSwitcher()

  const [sliderValue, setSliderValue] = useState(0)
  const [resultData, setResult] = useState([
    'Im the content in 0th position',
    'another content'
  ])

  console.log(resultData)

  let data = {
    0: ['Im the content in 0th position', 'another content'],
    1: ["I'm one", "I'm another content"],
    2: ["I'm two", "I'm another content"],
    3: ["I'm three", "I'm another content"]
  }

  function handleSliderChange(val) {
    setSliderValue(val)
    setResult(data[val])
  }

  return (
    <Box as='section' outline='0' tabIndex={-1} {...props} w='100%'>
      <Box w='100%' mb={{ base: '32px', md: '64px', xl: '100px' }}>
        <SectionHeader sibling={<Line />} mr='16px'>
          <Flex alignItems='center' alignContent='center'>
            <SpherePulse fontSize='2em' />
            <Title mx='15px'>Slider</Title>
          </Flex>
        </SectionHeader>
      </Box>

      <Box pr={{ base: '8px' }}>
        <Body mb={{ base: '30px', md: '42px', xl: '78px' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, rerum,
          nihil numquam quod officiis eum quaerat culpa hic ducimus doloremque
          pariatur quas debitis beatae voluptate velit nesciunt repellendus.
          Explicabo eaque adipisci quas dolore a, vel impedit aliquam quibusdam
          dicta perspiciatis, aspernatur quos labore est, odit laborum molestias
          laboriosam numquam. Laudantium!
        </Body>
        <Box mx={{ base: '10px' }}>
          <Slider
            id='slider-track-4'
            aria-label='slider'
            defaultValue={sliderValue}
            mb={{ base: '6px', md: '20px', xl: '50px' }}
            focusThumbOnChange={false}
            onChange={(val) => handleSliderChange(val)}
          >
            <SliderTrack />
            <SliderThumb boxSize={6} bg={secondary}>
              <SpherePulse fontSize='2em' />
            </SliderThumb>
          </Slider>
        </Box>

        <Heading3>Results for {`${sliderValue}:${100 - sliderValue}`}</Heading3>
        <Stack as='ul'>
          {resultData ? (
            resultData.map((data, idx) => {
              return (
                <Bullet key={idx} as='li'>
                  {data}
                </Bullet>
              )
            })
          ) : (
            <>
              <Bullet as='li'>Lorem ipsum dolor sit amet.</Bullet>
              <Bullet as='li'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Bullet>
              <Bullet as='li'>Lorem, ipsum.</Bullet>
              <Bullet as='li'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium, ut!
              </Bullet>
              <Bullet as='li'>
                You can read{' '}
                <Link color={secondary} textDecor='underline' href=''>
                  this article
                </Link>{' '}
                for more information.
              </Bullet>
            </>
          )}
        </Stack>
      </Box>
    </Box>
  )
}

export default SliderPart

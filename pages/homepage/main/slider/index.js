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
import { useColorMode } from '@chakra-ui/color-mode'

const SliderPart = ({ ...props }) => {
  const { secondary, primary } = useColorSwitcher()

  const { colorMode } = useColorMode()

  const [upperHouse, setUpperHouse] = useState(22)
  const [fptp, setFPTP] = useState(3.63)
  const [ratio, setRatio] = useState(60)

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

  const women_sent = upperHouse + (fptp / 100) * (ratio / 100) * 275,
    w_req = 111.3222,
    pr_w_req = w_req - women_sent,
    pr_count = ((100 - ratio) / 100) * 275

  function handleSliderChange(val) {
    // setSliderValue(val)
    setResult(data[val])
  }

  return (
    <Box as='section' outline='0' tabIndex={-1} {...props} w='100%'>
      <Box w='100%' mb={{ base: '20px', md: '40px', xl: '66px' }}>
        <SectionHeader sibling={<Line />} mr='16px'>
          <Flex alignItems='center' alignContent='center'>
            <SpherePulse fontSize='2em' />
            <Title mx='15px'>Slider</Title>
          </Flex>
        </SectionHeader>
      </Box>

      <Box pr={{ base: '8px' }}>
        {/* <Body mb={{ base: '30px', md: '42px', xl: '78px' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, rerum,
          nihil numquam quod officiis eum quaerat culpa hic ducimus doloremque
          pariatur quas debitis beatae voluptate velit nesciunt repellendus.
          Explicabo eaque adipisci quas dolore a, vel impedit aliquam quibusdam
          dicta perspiciatis, aspernatur quos labore est, odit laborum molestias
          laboriosam numquam. Laudantium!
        </Body> */}
        <Heading3>Women from upper house ({upperHouse})</Heading3>
        <Box mx={{ base: '10px' }}>
          <Slider
            id='slider-track-4'
            aria-label='slider'
            defaultValue={upperHouse}
            min={22}
            max={59}
            mb='1em'
            focusThumbOnChange={false}
            onChange={(val) => setUpperHouse(val)}
          >
            <SliderTrack />
            <SliderThumb boxSize={5} bg={secondary} />
          </Slider>
        </Box>

        <Heading3>Percentage of Women from FPTP ({fptp + '%'})</Heading3>
        <Box mx={{ base: '10px' }}>
          <Slider
            id='slider-track-4'
            aria-label='slider'
            defaultValue={fptp}
            mb='1em'
            focusThumbOnChange={false}
            onChange={(val) => setFPTP(val)}
          >
            <SliderTrack />
            <SliderThumb boxSize={5} bg={secondary} />
          </Slider>
        </Box>

        <Heading3>Ratio of FPTP:PR ({`${ratio}:${100 - ratio}`})</Heading3>
        <Box mx={{ base: '10px' }}>
          <Slider
            id='slider-track-4'
            aria-label='slider'
            mb='1em'
            defaultValue={ratio}
            focusThumbOnChange={false}
            onChange={(val) => setRatio(val)}
          >
            <SliderTrack />
            <SliderThumb boxSize={5} bg={secondary} />
          </Slider>
        </Box>

        <Heading3>Results </Heading3>
        {/* for {`${ratio}:${100 - ratio}`} */}
        <Stack as='ul'>
          {/* {resultData ? (
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
          )} */}
          {pr_w_req < pr_count ? (
            <Bullet
              as='li'
              color={`${colorMode === 'light' ? 'green.700' : 'green.300'}`}
            >
              This configuration doesn&apos;t breach constitutional requirement.
            </Bullet>
          ) : (
            <Bullet as='li' color='red.500'>
              This configuration breaches constitutional requirement.
            </Bullet>
          )}

          <Bullet as='li'>Total PR seats: {Math.floor(pr_count)}</Bullet>
          <Bullet as='li'>
            Necessary number of women from PR seats:{' '}
            {pr_w_req < 0 ? '0' : Math.ceil(pr_w_req)}
          </Bullet>
          <Bullet as='li'>
            Women from FPTP seats:{' '}
            {Math.round((((fptp / 100) * ratio) / 100) * 275)}
          </Bullet>
          <Bullet as='li'>Women from Upper House: {upperHouse}</Bullet>
          {pr_w_req < pr_count ? (
            <Bullet
              as='li'
              color={`${colorMode === 'light' ? 'green.700' : 'green.300'}`}
            >
              Minimum percentage of women in the parliament ensured:{' '}
              {(((pr_w_req + women_sent) / 334) * 100).toFixed(2)}
            </Bullet>
          ) : (
            <Bullet as='li' color='red.500'>
              Minimum percentage of women in the parliament ensured:{' '}
              {(((pr_count + women_sent) / 334) * 100).toFixed(2)}
            </Bullet>
          )}
        </Stack>
      </Box>
    </Box>
  )
}

export default SliderPart

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

  const women_sent = upperHouse + (fptp / 100) * (ratio / 100) * 275,
    w_req = 111.3222,
    pr_w_req = w_req - women_sent,
    pr_count = ((100 - ratio) / 100) * 275

  return (
    <Box
      sx={{ scrollMarginTop: '7em' }}
      as='section'
      outline='0'
      tabIndex={-1}
      {...props}
      w='100%'
    >
      <Box w='100%' mb={{ base: '20px', md: '40px', xl: '66px' }}>
        <SectionHeader sibling={<Line />} mr='16px'>
          <Flex alignItems='center' alignContent='center'>
            <SpherePulse fontSize='2em' />
            <Title mx='15px'>Slider</Title>
          </Flex>
        </SectionHeader>
      </Box>

      <Box pr={{ base: '8px' }}>
        <Body mb='1.7em'>
          This slider is for you to explore. The three sliders can be used to
          set up the number of women in the parliament from the upper
          house(which can range from 22 to 59), the percentage of women from all
          members elected through FPTP system and the percentage ratio of
          FPTP:PR. Feel free to change individual values and see if the
          hypothetical scenario is possible according to the requirements of the
          constitution. The requirement is that at least one-third(33.33%) of
          women in the federal parliament must be women. Also feel free to
          ponder why some permutations breach constitutional requirements while
          some do not. Have an exciting journey with the sliders then!
        </Body>
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

/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import data from '@/assets/data/articles.js'
import SpherePulse from '@/assets/motion/SpherePulse'
import { Line, SectionHeader } from '@/components/layout'
import { Title } from '@/components/typography'
import { ArticleCard } from '@/components/articlecard'
import { List, ListIcon, ListItem, OrderedList } from '@chakra-ui/layout'
import CBullet from '@/components/typography/bullet'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useColorMode } from '@chakra-ui/color-mode'

import 'swiper/css'
import 'swiper/css/pagination'

import SwiperCore, { Pagination } from 'swiper'

SwiperCore.use([Pagination])

import useColorSwitcher from '@/utils/hooks/useColorSwitcher'

const Articles = ({ ...props }) => {
  const [articles, setArticles] = useState(data)
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)

  const { secondary, primary } = useColorSwitcher()
  const { colorMode } = useColorMode()

  function showHide() {
    setShow(!show)
  }

  return (
    <Box
      sx={{ scrollMarginTop: '7em' }}
      as='section'
      outline='0'
      tabIndex={-1}
      {...props}
      w='100%'
    >
      <Box w='100%' mb={{ base: '20px', md: '45px', xl: '70px' }}>
        <SectionHeader sibling={<Line />} mr='16px'>
          <Flex alignItems='center' alignContent='center'>
            <SpherePulse fontSize='2em' />
            <Title mx='15px'>Articles</Title>
          </Flex>
        </SectionHeader>
        <Title fontSize='4xl' mt='1em'>
          Highlights
        </Title>
        <Box my='1.5em'>
          <Swiper
            slidesPerView={2}
            spaceBetween={35}
            pagination={{
              clickable: true
            }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 40
              }
            }}
            className='mySwiper'
          >
            <SwiperSlide>
              There is a legal provision of a compensatory system for women in
              the constitution. The constitution has a provision that there must
              be at least 33.33% of women in the federal parliament. This would
              mean that the less the women are elected through FPTP, parties
              would be compelled to send more women from their PR list. This
              includes the fact that there is an existing provision that at
              least 50% of members sent from the PR list by parties need to be
              women. However, in certain circumstances, parties will need to
              send more women if sending the required 50% of PR members doesn't
              suffice to ensure that the federal parliament has at least one
              third women in totality.{' '}
              {show && (
                <>
                  <br />
                  Now, the interesting thing to note is that this provision
                  exists only for women. There is no compensatory provision as
                  such for other ethnic groups that continue to be
                  underrepresented. For example, for Muslims, the PR list
                  ensures that at least 4.4 percent of total members from each
                  closed list belong to Muslim community. However, even with
                  that provision, there is still a chance that no Muslim gets
                  any seat through FPTP system and no Muslim gets in the upper
                  house. The number of Muslims through FPTP and in the upper
                  house need not be compensated by the PR list unlike in the
                  earlier case of women. So, there is a likely possibility that
                  even with progressive-touted provision, the federal parliament
                  has just around 5 Muslims(~4.4 percent of 110 PR seats), which
                  amounts to just 0.015% of the Federal parliament. So, how can
                  the constitution be touted as progressive when it allows not
                  representing an entire group? The question needs answers.{' '}
                </>
              )}
              <Button color={secondary} variant='link' onClick={showHide}>
                {show ? ' Show less' : ' Show more'}
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              The ratio of FPTP: PR in the lower house of the federal parliament
              is 60:40. A curious question would be to ask why those numbers?
              Why 60 and why 40? While there can be a political flavour to the
              decision, some technicalities also seem to be playing a role here.
              With the 33.33% minimum requirement of women in the federal
              parliament, 60:40 seems to technically be the required option for
              FPTP:PR ratio. With the present percent of women elected through
              FPTP(~3.63%) in the lower house, the ratio 70:30 seems to be the
              edge ratio that meets the constitutional requirement(Try this in
              our slider). With a little bit of forecast that women elected
              could be even less than the present percent elected, 60:40 could
              have been agreed to be the FPTP:PR ratio as having more FPTP than
              60% could bring a deadlock to how constitutional requirement is to
              be met.
            </SwiperSlide>
            <SwiperSlide>
              For the elections after interim constitution also had a mixed
              electoral system. For the election to the CA, Nepal adopted a
              mixed parallel system (FPTP and PR) giving a greater weight to the
              PR, 56 % or 335 out of total 601 seats. Seats allocated for the
              FPTP was 240 (40%). The remaining 4% of members in the CA were
              nominated by the Council of Ministers. However, after the
              Constitution of Nepal 2072, the FPTP:PR ratio was changed to
              60:40. What caused the PR weightage to decrease? Why did the
              constitution drafters decide to take a regressive step when the
              world is moving towards total proportional representation system?
              A few answers could denote what might have happened.{' '}
              {show2 && (
                <>
                  <br />
                  The Constituent Assembly made after the Interim Constitution
                  2063(2007 AD) was both a Constituent Assembly and the
                  parliament but the parliament after the Constitution of Nepal
                  2072(2015 AD) is just a parliament. When drafting a
                  constitution, a possible thought-process could have been to
                  improve the inclusion as much as possible, thereby having the
                  percent of members through PR high than that through FPTP.
                  Also, same is the reason for why there were 601 members in the
                  parliament after 2063(2007 AD) but just 334 members after
                  2072(2015 AD). <br />
                  A slightly political nuance to the answer could also be that
                  during 2063, Maoists in the country had a larger influence
                  over constitution drafting and increasing proportional
                  representation was their one of the major demands(they even
                  demanded full PR system). However, when the 2013 elections
                  relegated the Maoists to the third place in the house, they
                  could not hold strong to their agenda of a proportional
                  representation system and succumbed to Nepali Congress and UML
                  pushing through FPTP: PR ratio that just meets the
                  constitutional requirements. <br />
                  "Taking advantage of the chaos unleashed by the 2015
                  earthquake, the ruling parties hastily pushed through
                  a constitution that reversed many of the gains made since
                  2006……..The new constitution also reduced the share of
                  proportional representation (PR) seats in the House of
                  Representatives" writes Shradha Ghale in a paper titled
                  "Backlash against Inclusion"{' '}
                </>
              )}
              <Button
                color={secondary}
                variant='link'
                onClick={() => setShow2(!show2)}
              >
                {show2 ? ' Show less' : ' Show more'}
              </Button>
            </SwiperSlide>
          </Swiper>
        </Box>
        {/* <List spacing={2} my={5}>
          <ListItem>
            <ListIcon as={CBullet} />
            There is a legal provision of a compensatory system for women in the
            constitution. The constitution has a provision that there must be at
            least 33.33% of women in the federal parliament. This would mean
            that the less the women are elected through FPTP, parties would be
            compelled to send more women from their PR list. This includes the
            fact that there is an existing provision that at least 50% of
            members sent from the PR list by parties need to be women. However,
            in certain circumstances, parties will need to send more women if
            sending the required 50% of PR members doesn't suffice to ensure
            that the federal parliament has at least one third women in
            totality.{' '}
            {show && (
              <>
                <br />
                Now, the interesting thing to note is that this provision exists
                only for women. There is no compensatory provision as such for
                other ethnic groups that continue to be underrepresented. For
                example, for Muslims, the PR list ensures that at least 4.4
                percent of total members from each closed list belong to Muslim
                community. However, even with that provision, there is still a
                chance that no Muslim gets any seat through FPTP system and no
                Muslim gets in the upper house. The number of Muslims through
                FPTP and in the upper house need not be compensated by the PR
                list unlike in the earlier case of women. So, there is a likely
                possibility that even with progressive-touted provision, the
                federal parliament has just around 5 Muslims(~4.4 percent of 110
                PR seats), which amounts to just 0.015% of the Federal
                parliament. So, how can the constitution be touted as
                progressive when it allows not representing an entire group? The
                question needs answers.{' '}
              </>
            )}
            <Button colorScheme='teal' variant='link' onClick={showHide}>
              {show ? ' Show less' : ' Show more'}
            </Button>
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            The ratio of FPTP: PR in the lower house of the federal parliament
            is 60:40. A curious question would be to ask why those numbers? Why
            60 and why 40? While there can be a political flavour to the
            decision, some technicalities also seem to be playing a role here.
            With the 33.33% minimum requirement of women in the federal
            parliament, 60:40 seems to technically be the required option for
            FPTP:PR ratio. With the present percent of women elected through
            FPTP(~3.63%) in the lower house, the ratio 70:30 seems to be the
            edge ratio that meets the constitutional requirement(Try this in our
            slider). With a little bit of forecast that women elected could be
            even less than the present percent elected, 60:40 could have been
            agreed to be the FPTP:PR ratio as having more FPTP than 60% could
            bring a deadlock to how constitutional requirement is to be met.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            For the elections after interim constitution also had a mixed
            electoral system. For the election to the CA, Nepal adopted a mixed
            parallel system (FPTP and PR) giving a greater weight to the PR, 56
            % or 335 out of total 601 seats. Seats allocated for the FPTP was
            240 (40%). The remaining 4% of members in the CA were nominated by
            the Council of Ministers. However, after the Constitution of Nepal
            2072, the FPTP:PR ratio was changed to 60:40. What caused the PR
            weightage to decrease? Why did the constitution drafters decide to
            take a regressive step when the world is moving towards total
            proportional representation system? A few answers could denote what
            might have happened.{' '}
            {show2 && (
              <>
                <br />
                The Constituent Assembly made after the Interim Constitution
                2063(2007 AD) was both a Constituent Assembly and the parliament
                but the parliament after the Constitution of Nepal 2072(2015 AD)
                is just a parliament. When drafting a constitution, a possible
                thought-process could have been to improve the inclusion as much
                as possible, thereby having the percent of members through PR
                high than that through FPTP. Also, same is the reason for why
                there were 601 members in the parliament after 2063(2007 AD) but
                just 334 members after 2072(2015 AD). <br />
                A slightly political nuance to the answer could also be that
                during 2063, Maoists in the country had a larger influence over
                constitution drafting and increasing proportional representation
                was their one of the major demands(they even demanded full PR
                system). However, when the 2013 elections relegated the Maoists
                to the third place in the house, they could not hold strong to
                their agenda of a proportional representation system and
                succumbed to Nepali Congress and UML pushing through FPTP: PR
                ratio that just meets the constitutional requirements. <br />
                "Taking advantage of the chaos unleashed by the 2015 earthquake,
                the ruling parties hastily pushed through a constitution that
                reversed many of the gains made since 2006……..The new
                constitution also reduced the share of proportional
                representation (PR) seats in the House of Representatives"
                writes Shradha Ghale in a paper titled "Backlash against
                Inclusion"{' '}
              </>
            )}
            <Button
              colorScheme='teal'
              variant='link'
              onClick={() => setShow2(!show2)}
            >
              {show2 ? ' Show less' : ' Show more'}
            </Button>
          </ListItem>
        </List> */}
        Source:
        <OrderedList>
          <ListItem>
            Budhi Karki, Rohan Edrisinha. "The federalism debate in Nepal"{' '}
            <em>United Nations Development Programme (UNDP)</em>
          </ListItem>
          <ListItem>
            Shradha Ghale."Backlash against inclusion" <em>Accord ISSUE 26</em>,
            March 2017, pg 123,
            rc-services-assets.s3.eu-west-1.amazonaws.com/s3fs-public/BacklashAgainstInclusion.pdf
          </ListItem>
        </OrderedList>
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

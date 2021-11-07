/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text } from '@chakra-ui/react'
import { Heading3 } from '@/components/typography'
import Head from 'next/head'
import { Fonts } from '@/utils/Fonts'
import Header from '@/components/header'
import { MainLayout } from '@/components/layout'

export default function Interview() {
  const title = 'Interview'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Fonts />
      <Header />

      <MainLayout>
        <Box as='main' outline='0' tabIndex={-1} w='100%' mt='1.5em'>
          <Box w='100%' mb={{ base: '32px', md: '64px', xl: '100px' }}>
            <Heading as='h1' mb={7}>
              {title}
            </Heading>
            <Box mb='1.5em' width={{ base: '100%', lg: '70%' }}>
              <iframe
                width='100%'
                height='410'
                src='https://www.youtube-nocookie.com/embed/5eDhISctB9c'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </Box>
            <Box fontSize='16.5px'>
              <Text mb='1.5em'>
                Mr. Yagya Raj Pandey has completed his BALLB from Nepal Law
                Campus. He is pursuing an LLM from Ratna Rajya Laxmi Campus in
                Journalism and Mass Communications. He has also completed a
                Bachelor’s degree in Political Science and Journalism. He is
                also involved in Image Television as a news reporter and
                producer. He is also the content editor of lexnepal.com, Nepal’s
                first legal portal. He has been teaching law in Bachelor
                Entrance Examination Preparation for five years. Mr. Pandey
                started a YouTube channel because he thinks the language of law
                has been jargonized and made hard for the general public to
                understand. He aims to make it easy for normal citizens.
              </Text>
              <Heading3>What is minority?</Heading3>
              <Text mb='1.5em'>
                Our society is not composed of a people of single religion,
                caste or race. There are multiple sects in our society divided
                in castes, Varnas. The people whose representation in state
                authorities, politics, economic sector, and educational sector
                is absent or very less are known as minorities. For example:
                LGBT+ communities, Raute, etc. Women are NOT minorities
                considering the population but they are minorities considering
                their representation in various sectors.
              </Text>

              <Heading3>
                Why is minority representation, in the parliament and everywhere
                alike, necessary?{' '}
              </Heading3>
              <Text mb='1.5em'>
                Our society is a dynamic society. The wants, needs, and issues
                of minorities cannot be represented by a member of a majority
                sect because they are not familiar with those issues. Although
                the decisions are taken according to the opinions of majority in
                democracy, the opinions of minorities are also respected. The
                main goal of welfare based democracy is collective happiness and
                development which tries to accommodate the desires of as much
                citizens as possible. Democracy can’t be fully achieved by
                ignoring the voices of minorities.
              </Text>

              <Heading3>
                How was the size of parliament determined?(Why exactly 275 in
                the lower house and 59 in the upper house? 
              </Heading3>
              <Text mb='1.5em'>
                The exact demarcation is not present for the size. This method
                of representation is called territorial representation. The
                representation systems are different in different countries. In
                our system, it is ensured that each geographical unit is
                represented. The people living in different geographic regions
                of Nepal have different traditions and life styles. The Maoist
                revolution had promised to ensure territorial representation
                which resulted for the success of the movement. Consequently,
                this system was adopted as a consensus between Maoists and
                political parties of Nepal and promulgated by the Parliament.
                The primary job of the elected 601-member assembly was to
                promulgate a constitution. Constitution is the supreme law of
                the country and reflects the aspirations of the people. Maximum
                representation of people from every sect was required for it due
                to which the size of constituent assembly was very large. As our
                country could not afford to organize a separate election for the
                parliament, the same body worked as both Constituent Assembly
                and Legislative. After the promulgation of Constitution of Nepal
                2072, it was realized that our economic status was not so strong
                to maintain such a large body and the size was cut to 275 for
                the Legislative. <br />
                No commission was formed for determination of size of
                parliament. It was a result of political consensus.
              </Text>

              <Heading3>
                How has federalism fared in Nepal after 6 years of its
                implementation?
              </Heading3>
              <Text mb='1.5em'>
                The concept of Federalism for Nepal is quite new. The
                introduction of Federalism in Nepal wasn’t done in a matured
                way. There is still a lack of full proof logic for need of
                federalism in Nepal. The election for three tiers of government
                was successfully conducted in 2074B.S. This was a major
                milestone in the journey of federalism in Nepal. All the
                governments from local to central level were successfully
                formed. The three tier system of federalism is rare in the
                world. The Federal systems of India and USA are based on two
                tiers. The relevance of three tiers is yet to be proven in
                Nepal. For example, during the COVID pandemic local governments
                worked well for establishment of local hospitals and quarantine
                centers. Federal government was also necessary but the role of
                provincial governments was almost negligible. In addition to
                this, there is high political instability in provinces. Multiple
                State Heads have been changed in a very small time. The
                connection between provincial government and public is also
                weak. It is high time we review and reconsider the relevance of
                Federalism in Nepal.
              </Text>

              <Heading3>
                Why do you think the ratio of FPTP: PR in the lower house 60:40?
                Is it any mathematical endpoint or is it a product of general
                consensus?
              </Heading3>
              <Text mb='1.5em'>
                The politics of Nepal had been very unstable after 2063. To
                eliminate the instability and ensure the proportional
                representation, proportional system is necessary but the
                candidates elected by this method are not connected and
                accountable to the general public. So, FPTP system was also
                deemed important. As, a result, the political consensus was
                achieved on a 60:40 FPTP:PR ratio.
              </Text>

              <Heading3>
                What would a 100% FPTP world and a 100% PR world look like?
              </Heading3>
              <Text mb='1.5em'>
                A 100% FPTP world is unimaginable. It violates our ideas of
                minority representation, welfare democracy, and equal share of
                power. In a diverse country like Nepal, FPTP can't address
                issues of everyone. On the other hand, a 100% PR system can
                invite political instability due to large number of political
                parties.
              </Text>

              <Heading3>
                Can you tell us about the transitional phase from constitutional
                monarchy to democracy? What were the constraints? How was the
                structuring of the nation done?
              </Heading3>
              <Text mb='1.5em'>
                After the Mass Movement of 2047BS, the monarch agreed upon to be
                under the Constitution but it was not so in practice. Similarly,
                it was desired that the head of the State should be elected by
                the people. As a result, Nepal entered Constitutional democracy
                from Constitutional monarchy. The relevance of concepts like
                Federalism and secularism is still debated in our country.
              </Text>

              <Heading3>
                If there was one thing that could have been done differently
                when structuring the country’s political shape (Parliament or
                States) that would improve the existing structure, what would
                that be?
              </Heading3>
              <Text mb='1.5em'>
                In my opinion, we can avoid the provincial government and go for
                a two tier Federal structure including Federal and local
                governments. The local government should be made more powerful
                and resourceful. The financial situation of our country is not
                viable to sustain 7 provincial governments. Also, the importance
                of provincial government is not seen. I don't think we should
                return to the Unitary system. We should strengthen the local
                governments with economic and legal advisors so that they can
                make laws and budgets properly as per their needs.
              </Text>

              <Heading3>
                It seems that women have reserved 1/3rd seats in the whole
                parliament, in addition to 50% reservation in PR closed lists,
                through a compensatory system. However, ethnic groups have
                reserved seats in the HoR only through PR closed list
                reservations, a non-compensatory system. Why couldn’t there be a
                compensatory system for ethnic groups as well?
              </Heading3>
              <Text mb='1.5em'>
                In my opinion, first of all the composition of major political
                parties should be made inclusive in respect to different
                ethnicities. After achieving this only we can think of making
                the proportional representation compensatory for ethnicities as
                well.
              </Text>

              <Heading3>
                In the last parliament, the composition of the house was: 335
                through PR(56%), 240 through FPTP(40%) and 26 through
                nomination(4%). The present lower house has members 60% through
                FPTP and 40% through PR. Why do the percentages look like they
                have been swapped for FPTP and PR in two consecutive houses?
              </Heading3>
              <Text mb='1.5em'>
                This is more of a political issue than a legal one. Maoists were
                in political control in 2063. Their revolution was based on the
                agendas of inclusiveness and minority rights. To ensure the
                majority of their party in the parliament, Maoists advocated for
                high PR share. On the other hand, Maoists had become third
                largest party in 2072. Nepali Congress and CPN-UML were in
                control. As a large PR share could cause political instability,
                they decided to reduce it to 40%.
              </Text>

              <Heading3>
                What do you think about the role of youth like us in the
                political scenario of the country? 
              </Heading3>
              <Text>
                I think the work you are doing is great. The main role of youth
                is to ask questions. We cannot sit silently saying, "I hate
                politics." It is time we make ourselves aware about our
                surroundings. We cannot depend on others' opinions. We should
                listen to everyone's opinions and then come to a conclusion. As
                voters, we need to ask questions to politicians. We should
                reconsider our electoral and representation system.
              </Text>
            </Box>
          </Box>
        </Box>
      </MainLayout>
    </>
  )
}

/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import data from '@/assets/data/articles.js'
import { useRouter } from 'next/router'
import Header from '../homepage/header'
import Footer from '../homepage/footer'
import {
  Box,
  Button,
  Heading,
  Text,
  Link,
  Stack,
  Table,
  Thead,
  Tbody,
  UnorderedList,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react'
import { Fonts } from '@/utils/Fonts'
import { MainLayout } from '@/components/layout'
import Head from 'next/head'
import { Bullet, Heading2, Heading3 } from '@/components/typography'

export default function Article() {
  // const [articles, setArticles] = useState(data)

  const router = useRouter()
  const { articleSlug } = router.query

  const title = 'Minority representation'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Fonts />
      <Button
        as='a'
        href='#articles'
        position='absolute'
        transform='translateX(-100%)'
        transition='transform 0.3s'
        _focus={{ transform: 'translateX(0%)' }}
      >
        Skip To Content
      </Button>
      <Header />

      <MainLayout>
        <Box as='section' outline='0' tabIndex={-1} w='100%'>
          <Box w='100%' mb={{ base: '32px', md: '64px', xl: '100px' }}>
            <Heading mb={7} as='h1'>
              {title}
            </Heading>
            <Text mb='1em'>
              A minority group refers to the group of people whose practices,
              race, religion, ethnicity, or characteristics are often in few
              numbers leading them to experience relative disadvantage compared
              to the dominant (majority) group.
            </Text>
            <Box mb='2em'>
              <Heading3>
                What are the factors that determine if a specific caste or
                ethnic group is Minor?{' '}
              </Heading3>
              <Text>
                Since Nepal is a multi-ethnic, multi-lingual, multi-religious,
                and multi-cultural state, there's a huge variation within the
                different groups leading to various cultural diversity, social
                practices, and economic disparities. Nepal has 125 castes/ethnic
                groups, speaking 123 languages and practicing ten different
                religions (CBS 2012). Even among these groups, there are
                subgroups and hierarchies following various norms and cultures.
                This variation leads to the formation of diverse subgroups with
                different ideologies, norms, and values. In terms of population,
                no caste/ethnic group is in the majority in Nepal. The
                hill-origin people – specifically the Khas Aryas, who have roots
                in and practice Hinduism – are the dominant minority (28.8%),
                followed by the Madhesis and Janajatis.
              </Text>
            </Box>
            <Box mb='2em'>
              <Heading3>Why is minority representation necessary?</Heading3>
              <Text>
                Minority groups often get underrepresented, leading to unequal
                allocation of power, resources, and opportunities. When the
                voice of the minorities get unheard and underrepresented,
                certain policies and law that are formulated may not help the
                address the following communities problem. Having a person
                representing their community helps to address the issues and
                form the policies that are actually necessary for that group as
                this person is more aware of their community than other
                representatives. Also, the representation of various minority
                groups in the Parliament means to practice democracy at its best
                providing equal rights and opportunities to all the citizens
                irrespective of their caste, color, creed, and gender. Leaving
                the minority on their own and not being able to allocate the
                resources and powers to the people equally can eventually result
                in the rise of the feeling of being left out by the government
                and lead to the emergence of conflicts and extremism, which can
                harm the nation.
              </Text>
            </Box>
            <Box mb='2em'>
              <Heading3>
                Are the minorities well represented in Parliament?
              </Heading3>
              <Text>
                Minorities representation has always been a topic of discussion.
                Often the hill supremacy has led to the underrepresentation of
                various communities of Nepal. When the topic of nationalism
                enters the conversation, most of the time, only Hilly people are
                generalized as Nepali, and the policies are often made
                considering them. Also, the lawmakers and most representatives
                perceive Kathmandu valley as a Nepal, failing to address the
                issues of people from the rural areas. Even the Parliament of
                Nepal doesn't reflect the country's actual population. Khas
                Aryas are the ones who have been dominating Nepalese politics
                for a very long period. Despite having a population of 31.2
                percent, this group makes up 45 percent of Parliament.
                Similarly, other minorities, such as Dalit, who has 13.8 percent
                of Nepal's population, make up only 8% of Parliament. 
                <strong>
                  Despite the laws designed to promote inclusion, women, Dalits,
                  and Muslims remain underrepresented, especially in powerful
                  positions.
                </strong>
              </Text>
            </Box>
            <Box mb='2em'>
              <Heading3>
                Should women be considered as a minority? Why are they
                underrepresented?{' '}
              </Heading3>
              <Text>
                Women do not constitute a statistical minority – their
                populations are nearly equal to men - but they can be considered
                a minority group since they have less authority and privileges
                than men. Being a patriarchal society, women in our country are
                very familiar with sexism and the disadvantages it brings with
                it in several different spheres of society, whether political,
                legal, economic, or familial. Although all parties have around
                33 percent women each, the preference is mainly given to the
                male while determining the candidacy for FPTP. Since there are
                no reserved seats for women within the FPTP seats, women make up
                only 7.45 percent of all FPTP candidates but 56 percent of all
                PR candidates as compensation.
              </Text>
            </Box>
            <Box mb='2.5em'>
              <Heading3>The struggle of minority women</Heading3>
              <Text>
                Nepali women are entangled in so many hierarchies: class, caste,
                ethnicity, language, age, religion. Ideas about "respect" come
                from precisely these hierarchies of power. Though they belong to
                different caste, religions, cultures, and status, one thing is
                certain that they are being oppressed with respect to economic,
                political, socio-cultural, and legal status. The educational
                access and school attainment of girls, Janajatis (indigenous,
                disadvantaged groups), and Dalits (the low caste) are far below
                the national average compared to Brahmans and Chhetris (high
                caste and privileged groups) often leading to the minority women
                from indigenous and lower caste being more underrepresented and
                unheard. Despite the feminist movements, lower-class women
                cannot advocate their issues and problems because analytical
                education is limited to upper-class women. Bahun/Chhetri women
                only account for 31 percent of the women population. Thus, the
                rest of the women are still underrepresented when it comes to
                movements, politics, economy, and legal status.
              </Text>
            </Box>
            <Heading3>
              Overrepresentation of Khas Aryas in the Parliament{' '}
            </Heading3>
            <Box mb='2.5em'>
              <Heading3>Who are Khas Aryas?</Heading3>
              <Text>
                According to the Constitution of Nepal, western hill Khas
                Bahuns, Chhetris, Thakuris, and Sanyasis, who are citizens of
                Nepal, should be considered as Khas Arya for electoral purposes.
                Khas or Khas-Aryas, Brahmins, and Chhetris—the hill so-called
                high caste Hindus—are the structurally privileged group in
                Nepal. They are disproportionately represented at all levels of
                government, especially in powerful positions.
              </Text>
            </Box>
            <Box mb='2em'>
              <Heading3>What makes them privileged than others?</Heading3>
              <Text mb='1em'>
                Dominance by Khas Aryas can be dated back to 1769 when Prithvi
                Narayan Shah conquered the three cities of Kathmandu valley.
                With his court came his kinsmen, retinue, priests, and soldiers
                — the new aristocracy of the hill region — to settle permanently
                in Kathmandu. Among them were the thar-ghar, the chosen and
                select families of hill brahmins such as Aryal, Khanal, Pandey,
                and Panta, who were rewarded with the best lands and houses in
                the Valley as their jagirs in return for their services to the
                Gorkhali court in war and peace. Thus begins the success story
                of the probate Bahuns, the brahmins from the hills. Even After
                Jang Bahadur Kunwar came to power in September 1846, following
                the Kot Massacre, he reorganized the judicial, civil, and
                revenue administration along seemingly institutional models.
                His Muluki Ain, or Civil Code of 1854, tried to codify Hindu
                caste orthodoxy as a state ideology with the Bahuns and
                Thakuris- Chhetris topping the social hierarchy and lumping a
                large segment of other Nepalis, including the Newars, as
                enslavable matawalis. Although Jung Bahadur's Muluki Ain, which
                gave the highest ritual status to Bahuns, was officially
                abolished 110 years later in 1964, it had by then ensured the
                Bahun's secular status as well by putting them at the top of the
                social pyramid. With the exception of a few "token" members from
                other caste groups, Nepal's politics, Nepal's education system,
                Nepal's public sector, Nepali media has been entirely dominated
                by Bahunists and their circle of semi-slaves.
              </Text>
              <Text>
                Even today, despite having a population of 31.2 percent, this
                group makes up 45 percent of Parliament. Most political parties
                remain dominated by the higher-caste Khas Arya group, relegating
                other groups to less powerful positions. 95.5% of all the Prime
                Ministers of Nepal have been Khas Arya men. Despite indigenous
                peoples, Dalit and Madhesi people constitute 69% of Nepal's
                population, not even one person belonging to these ethnic groups
                has reached the country's top executive post. 
              </Text>
              <small>
                Source:{' '}
                <Link
                  target='_blank'
                  rel='referrer noopener'
                  href='https://www.himalmag.com/bahunvada-myth-or-reality-kamal-p-malla-1992/'
                >
                  https://www.himalmag.com/bahunvada-myth-or-reality-kamal-p-malla-1992/
                </Link>
              </small>
            </Box>
            <Heading3>
              What are the provisions for women and minorities?
            </Heading3>
            <Box mb='2em'>
              <Heading3>Provision for women</Heading3>
              <Text>
                The constitution mandates that women make up one-third of the
                total number of representatives from each party in both houses
                of the Federal Parliament and the State Assemblies (SAs). To
                achieve this quota, the House of Representatives (HoR) and SAs
                Election Acts state that women must make up at least 50 percent
                of each proportional representation (PR) list submitted by a
                party to compensate for any shortfall from the
                first-past-the-post (FPTP) seats. In addition to a 50 percent
                quota for women on a party's PR list, the HoR and SA Election
                Acts specify the percentage of candidates on each list that
                should come from six "inclusion" groups specified in the
                constitution: Dalit, Adivasi Janajati, Khas Arya, Madeshi,
                Tharu, and Muslim. Lists must also include prescribed quotas of
                candidates from minorities and backward regions. To avoid high
                numbers of women nominated from only one inclusion group, the
                HoR Proportional Directive states that 50 percent of the elected
                representatives/candidates must be women within each inclusion
                group. The HoR Act prescribes the following quotas for each
                group, based on the population of each group in Nepal:
                Khas-Arya, Adivasi Janajati, Madhesi, Dalit, Tharu Muslim, and
                Other social groups.
              </Text>
              <Table variant='simple' mt='1em'>
                <TableCaption>
                  Elections in Nepal: 2017 House of Representation
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Inclusion Group </Th>
                    <Th isNumeric>Percentage of Candidates </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Dalit</Td>
                    <Td isNumeric>13.8%</Td>
                  </Tr>
                  <Tr>
                    <Td>Adivasi Janajati</Td>
                    <Td isNumeric>28.7%</Td>
                  </Tr>
                  <Tr>
                    <Td>Khas Arya</Td>
                    <Td isNumeric>31.2%</Td>
                  </Tr>
                  <Tr>
                    <Td>Madhesi</Td>
                    <Td isNumeric>15.3%</Td>
                  </Tr>
                  <Tr>
                    <Td>Tharu</Td>
                    <Td isNumeric>6.6%</Td>
                  </Tr>
                  <Tr>
                    <Td>Muslim</Td>
                    <Td isNumeric>4.4%</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
            <Box mb='2em'>
              <Heading3>
                Provision for people with disabilities and people from backward
                regions
              </Heading3>
              <Text>
                The constitution also states that persons with disabilities and
                people from backward regions should be included in the list. For
                the HoR, the quota for candidates from backward regions is 4.3
                percent. The ECN has instructed parties to include at least one
                person with a disability on their lists. Between HoR and SA
                candidates, 147 persons with disabilities have been nominated on
                the PR list.
              </Text>
              <small>
                Source:{' '}
                <UnorderedList listStyleType='none' spacing={1}>
                  <li>
                    <Link
                      href='https://www.recordnepal.com/dalits-and-women-the-most-under-represented-in-parliament'
                      target='_blank'
                      rel='referrer noopener'
                    >
                      https://www.recordnepal.com/dalits-and-women-the-most-under-represented-in-parliament
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://www.misaal.ngo/wp-content/uploads/2018/11/Nepal.pdf'
                      target='_blank'
                      rel='referrer noopener'
                    >
                      https://www.misaal.ngo/wp-content/uploads/2018/11/Nepal.pdf
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://www.ifes.org/sites/default/files/2017_ifes_nepal_house_of_representatives_and_state_assembly_elections_faqs_final_1.pdf'
                      target='_blank'
                      rel='referrer noopener'
                    >
                      https://www.ifes.org/sites/default/files/2017_ifes_nepal_house_of_representatives_and_state_assembly_elections_faqs_final_1.pdf{' '}
                    </Link>
                  </li>
                </UnorderedList>
              </small>
            </Box>
          </Box>
        </Box>
      </MainLayout>
      <Footer />
    </>
  )
}

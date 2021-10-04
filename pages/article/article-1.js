/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import data from '@/assets/data/articles.js'
import { useRouter } from 'next/router'
import Header from '../homepage/header'
import Footer from '../homepage/footer'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { Fonts } from '@/utils/Fonts'
import { MainLayout } from '@/components/layout'
import Head from 'next/head'
import { Heading3 } from '@/components/typography'

export default function Article() {
  // const [articles, setArticles] = useState(data)

  const router = useRouter()
  const { articleSlug } = router.query

  const title = 'Changes in Governance Structure in Nepal'

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
            <Heading as='h1' mb={7}>
              {title}
            </Heading>
            <Box mb='2em'>
              <Heading3>The Unification of Nepal</Heading3>
              <Text>
                The country, which we call Nepal today, was divided into many
                smaller states before 1743 AD. The unification of Nepal
                officially began after King Prithvi Narayan Shah of Gorkha
                launched an aggressive annexation campaign seeking to broaden
                his own kingdom's boarders. His annexation campaign continued
                long after his death which extended his kingdom (which was now
                called Nepal) from Sutlej to the Teesta river. The Kingdom was
                ruled by the Shah Dynasty which was an absolute monarchial
                family rule. The people living in the country were merely tax
                givers enjoying no representation and part in decision taking.
                Nepal lost a big part of its territory in the Sugauli Treaty of
                1814 after facing a major loss at the hands of the British Army.
              </Text>
            </Box>
            <Box mb='2em'>
              <Heading3>Rana Regime</Heading3>
              <Text>
                Kaji Junga Bahadur Kunwar, another interesting person in Nepal's
                history, executed Kot Massacre on 14th September, 1846 and
                Bhandarkhal Massacre to seize the executive power from the King.
                He became the Prime Minister of Nepal starting a family rule of
                his own to transfer the seat of the Prime Minister to his sons
                and brothers. Famously known as Rana Regime, this tyrannous rule
                lasted for 104 years. The King was essentially a ceremonial head
                having absolutely no powers (The King couldn't even move out of
                the Palace without Prime Minister's approval). Although the Rana
                regime had no representation of people in the government, just
                like the King's rule, many important social reforms happened
                during this time such as promulgation of the first constitution
                and some women rights.
              </Text>
            </Box>
            <Box mb='2em'>
              <Heading3>Nepal after Fall of Rana Regime</Heading3>
              <Text mb='1em'>
                Followed by the Indian independence of 1947, recently
                established political parties like Nepali Congress and Communist
                Party of Nepal started to revolt against the dictatorial Rana
                rule. Armed revolution by people's army made it mandatory for
                Ranas to compromise. The Tripartite Delhi Agreement of 1951
                between Ranas, Nepali Congress and King Tribhuvan sowed the
                first seed of democracy on Nepal's soil. The period between 1951
                and 1959 was full of instability resulting in change of 6 Prime
                Ministers within 8 years. Amid all these uncertainty, Nepal
                entered its first General Elections in 1959. This was the first
                time Nepalese people got the chance of choosing the one who was
                going to govern them. Nepali Congress got a sliding victory
                winning 79 out of 109 seats making Bishweshwar Prasad Koirala
                the first elected Prime Minister of Nepal. Unfortunately, this
                change was proved to be ephemeral when King Mahendra suspended
                the constitution, dissolved the elected parliament, dismissed
                the cabinet, imposed direct rule and imprisoned B.P. Koirala and
                his government colleagues on 15th December 1960.
              </Text>
              <Text mb='1em'>
                Mahendra, after his coup, started a new system called Panchayat
                system. Although this system was called party-less "guided"
                democracy, the real power remained in the hands of the monarch.
                Anyone opposing the system was deemed against the nation.
                Mahendra consolidated power by institutionalizing and invoking
                the three pillars of national identity: Hindu religion, Nepali
                language and Monarchy. His agenda of Hill, Hindu, High caste
                Nepali identity can be clearly seen in the fact that he made
                wearing a Dhaka topi mandatory for official photographs for
                passports and documents. As a matter of fact, Nepal was still
                being ruled by a monarch and his sycophants.
              </Text>
              <Text>
                The voices against monarchy started to grow louder and louder
                during the reign of King Birendra, who inherited his crown from
                Mahendra. The leaders in Panchayat System worked primarily for
                their own interests instead of public development. To settle the
                growing dissent,  Birendra declared a public referendum with two
                choices: Reformed Panchayat System and Multiparty Democracy.
                Panchayat won the referendum with 54% of the votes, however, the
                supporters of the multiparty system blamed the government of
                rigging. 
              </Text>
            </Box>
            <Box mb='2em'>
              <Heading3>Mass Movement – 1</Heading3>
              <Text>
                Nepali Congress and United Left Front came together and started
                to protest for multiparty democracy. Dozens of people were
                killed in the protest. Eventually King Birendra was forced to
                draft a new constitution with identifying the people as the
                source of political legitimacy and assurance of basic rights.
                The ban on political parties was lifted. People above 18 years
                were given right to vote. People, especially those of rural
                areas, believed that their voices will be represented better in
                parliamentary democracy. After more than 50 years of first
                General Elections, Nepal witnessed its second democratic
                election. Nepali Congress won the elections and Krishna Prasad
                Bhattarai became the Prime Minister of Nepal.
              </Text>
            </Box>
            <Box mb='2em'>
              <Heading3>Nepal After Mass Movement – 1</Heading3>
              <Text mb='1em'>
                The abrupt changes of policies from the new government brought
                economic crisis and chaos. The radical left started to protest
                against the sky-rocketing prices. The Congress government also
                failed to address the issue of land reforms. A small faction of
                people started to take over the aristocratic landlords on their
                own. However, the government successfully oppressed this initial
                uprising of what would be a decade long civil war.
              </Text>
              <Text>
                The instability in the government and systems continued. The
                social and political suppression of people continued. In March
                1997, People's War was declared by Communist Party of Nepal
                (CPN) under the leadership of Dr. Baburam Bhattarai and Pusha
                Kamal Dahal "Prachanda" in the favor of a People's Republic
                against constitutional democracy. The people's army kept
                fighting the Nepal Army in various parts of Nepal even fully
                occupying some districts.
              </Text>
            </Box>
            <Box mb='2em'>
              <Heading3>Narayanhiti Massacre and Mass Movement – 2 </Heading3>
              <Text mb='1em'>
                King Birendra and Queen Aiswarya were killed in a massacre in
                Narayanhiti Durbar on June 1, 2001. King Gyanendra became the
                new king of Nepal. He immediately deposed the elected government
                and took complete control. Due to unstable governments, public
                support moved away from monarchy. Political parties joined hands
                with the Maoists in their revolution for a republic which came
                to be known as Nepal's Second Mass Movement. The main principle
                behind this movement was equitable, participatory and inclusive
                democracy.
              </Text>
              <Text>
                Due to nationwide protests and no support from international
                community, King Gyanendra had to reinstate the parliament. A
                seven party coalition agreed to abolish monarchy and establish a
                Federal Democratic Republic. Under the UN mediation, Maoist
                signed peace accord with the government on 21 November, 2006 and
                decided to enter mainstream parliamentary politics. Constitution
                of Kingdom of Nepal 2047 was suspended and The Interim
                Constitution of Nepal 2063 was promulgated on 15 January 2007.
                Maoists secured a simple majority in elections held on 10 April
                2008. The newly elected constituent assembly declared Nepal a
                Federal Democratic Republic on 28 May, 2008. Reservations were
                created in government jobs immediately after the success of this
                movement after amendment in Civil Services Act. Dr. Ram Baran
                Yadav became the first President of Nepal on July 23, 2008.
                Nepal was declared a secular country. His Majesty’s Government
                was replaced by Nepal Government, all the powers of the King
                were suspended, his property was made taxable, Royal Nepal Army
                was named Nepal Army, and the existing National Anthem was
                suspended. The First Parliament cum Constituent Assembly could
                not draft the constitution even in the extended time. Seeing no
                hope of constitution from the first CA, it was dissolved with
                the announcement of elections for the next CA. The
                responsibility of fair elections was on Chief Justice Khil Raj
                Regmi making him the interim Prime Minister. Nepali Congress got
                majority in elections conducted on 19 November 2013. Finally,
                Nepal got its first constitution made by the people elected by
                the Nepalese in the form of Constitution of Nepal 2072 on 20
                September 2015.
              </Text>
            </Box>
            <Box>
              <Heading3>Nepal after 2072 </Heading3>
              <Text>
                Constitution of Nepal 2072 was seen as the ultimate result of
                ages long struggle of Nepalese people. This constitution divided
                Nepal into 7 autonomous states. According to this constitution,
                the sovereignty is vested in people of Nepal. This constitution
                declares every language spoken in Nepal as mother-tongue be
                nation language of Nepal. The elections for all three levels:
                Central, provincial and local, were conducted in different
                phases. Most of the administrative work is now conducted by the
                local people rather than someone appointed from the Centre. Two
                of the big parties of Nepal, CPN-UML and CPN Maoists merged
                together as their election manifesto. CPN was the biggest party
                in the parliament with more than 2/3rd majority. In spite of
                initial stability, Nepalese politics has again gone under tumult
                after division of different parties. The provincial governments
                are also unstable. Many important problems related to
                citizenship and diplomacy remain unsolved. Recently, politics of
                ordinances has started in Nepal. Two attempts of dissolution of
                parliament by the-then Prime Minister KP Oli were made harmless
                because of Supreme Court's interpretation of the constitution.
                Newly elected Prime Minister Sher Bahadur Deuba also used an
                ordinance for a legislation related to division of parties. The
                efforts by previous governments for land reforms were undone.
              </Text>
            </Box>
          </Box>
        </Box>
      </MainLayout>
      <Footer />
    </>
  )
}

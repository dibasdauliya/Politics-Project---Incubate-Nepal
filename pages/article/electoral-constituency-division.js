/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import data from '@/assets/data/district-data'
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
  List,
  ListIcon,
  ListItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react'
import { Fonts } from '@/utils/Fonts'
import { MainLayout } from '@/components/layout'
import Head from 'next/head'
import MathJax from 'react-mathjax'
import CBullet from '@/components/typography/bullet'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'

// export async function getStaticProps() {
//   const url = 'https://docs.google.com/spreadsheets/d/'
//   const ssid = '1YrKzcDbeHUPineWpPsKYAGzVvgrEyr1iHjiBraUPEto'
//   const q1 = `/gviz/tq?`
//   const endpoint1 = `${url}${ssid}${q1}`

//   const res = await fetch(endpoint1)
//   const resData = await res.text()
//   const { table } = JSON.parse(resData.substr(47).slice(0, -2))

//   return {
//     props: table
//   }
// }

export default function Article() {
  // const rows = props.rows.map((data) => data)
  // const newRow = rows.map(({ c }) => c)

  const { secondary } = useColorSwitcher()

  const title = 'Electoral constituency division'

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
            <Stack spacing='1em'>
              {/* <Text>
                165 members in the lower house of the parliament in Nepal are
                elected from 165 different electoral constituencies around the
                country through the FPTP system discussed earlier. Why 165?
                Well, that's a broader question. Before we dive deep into it,
                let us gain an initial understanding of the present division.
                Electoral constituencies in Nepal have been divided giving 90%
                weightage to population of a particular district and 10%
                weightage to the geography of the district. The Constitution
                Delineation Committee(CDC) submitted a report in 2017 with 165
                constituencies after what has been quoted to be a "thorough
                consideration of factors like geography, population, social
                diversity and laws." An additional provision also exists such
                that each district gets at least one constituency.
              </Text>
              <Box>
                <Text>
                  To get a mathematical sense of what's happening, let us
                  initially calculate the population per seat in the lower house
                  for those elected through FPTP.
                </Text>
                <MathJax.Provider>
                <MathJax.Node formula={'\\text{Population per seat} = \\frac{2,64,94,504}{165} \\approx 1,60,573'} /> 
              </MathJax.Provider>
              </Box>
              <Text>
                This means that ideally i.e. if division is to be made solely on
                the basis of population, every constituency should have a
                population of approximately  1,60,573. Since, there's also a
                factor of geography and also that population distribution
                ideally cannot be uniform on point, a variation in population
                per every seat can be expected to vary. 
              </Text>
              <Text>
                The first idea to ponder on would be the question about the
                inclusion of "geography" as factor. The primary reason would be
                to ensure that, in places with sparse population, the
                representation wouldn't be such that representatives aren't
                familiar with the voters(because they are so far away from each
                other) or to ensure that the aim of locality and representation
                of local values in the parliament is met. Looking at the
                delineation through the lenses of mathematics can ease the
                understanding process of what might have happened when the
                division of constituencies actually took place.
              </Text>
              <Box>
                <Text>
                  Let me clarify the notion with an example. Sarlahi has a
                  population of around 7,69,729(2011 census). And since the
                  Population per seat for the country is 1,60,573:
                </Text>
                <MathJax.Provider>
                  <MathJax.Node
                    formula={
                      '\\text{Seats} = \\frac{7,69,729}{1,60,573} \\approx \\text{4.79 seats}'
                    }
                  />
                </MathJax.Provider>
              </Box>
              <Box>
                <Text>
                  Now, if the division had just been on the basis of population,
                  Sarlahi should have been allocated around 5 seats. Let us
                  calculate the Area per seat in the lower house(FPTP) to see
                  how Sarlahi fares in the respect of "geography".
                </Text>
                <MathJax.Provider>
                  <MathJax.Node
                    formula={
                      '\\text{Area per seats} = \\frac{1,47,181}{165} \\approx 892 \\, km^2 '
                    }
                  />
                </MathJax.Provider>
              </Box>
              <Box>
                Sarlahi has an area of{' '}
                <MathJax.Provider>
                  <MathJax.Node inline formula={'1,259 \\, km^2'} />
                </MathJax.Provider>
                .
                <MathJax.Provider>
                  <MathJax.Node
                    formula={
                      '\\text{Seats} = \\frac{1,259}{892} \\approx  \\text{1.49 seats}'
                    }
                  />
                </MathJax.Provider>
              </Box>
              <Box>
                <Text>
                  If the division had been just on the basis of Area covered,
                  Sarlahi would have been allocated just 1 seat. Now, the 10%
                  influence of "geography" decreases the allocation of 4.79
                  seats to 4.45 seats
                </Text>
                <MathJax.Provider>
                  <MathJax.Node inline formula={'(4.79 * 0.9 + 1.41 * 0.1)'} />
                </MathJax.Provider>
                And therefore, Achham has been allocated 4 seats.
              </Box>
              <Text>Let's take another example, shall we? </Text>
              <Box>
                <Text>
                  With the population of around 17,44,240, on the basis of
                  population alone, the Kathmandu would have been allocated:
                </Text>
                <MathJax.Provider>
                  <MathJax.Node
                    formula={
                      '\\text{Seats} = \\frac{17,44,240}{1,60,573} \\approx  \\text{10.86 seats}'
                    }
                  />
                </MathJax.Provider>
              </Box>

              <Text>
                It would, then, seem reasonable to allocate 11 seats to
                Kathmandu.
              </Text>
              <Box>
                <Text>
                  However, on the basis of area alone, Kathmandu would have been
                  allocated:
                </Text>
                <MathJax.Provider>
                  <MathJax.Node
                    formula={
                      '\\text{Seats} = \\frac{414}{892} \\approx  \\text{0.5 seats}'
                    }
                  />
                </MathJax.Provider>
              </Box>
              <Box>
                Taking the 90% population and 10% geography factors, we reach a
                value of{' '}
                <MathJax.Provider>
                  <MathJax.Node
                    inline
                    formula={'10.86 ∗ 0.9 + 0.5 ∗ 0.1 = 9.8'}
                  />
                </MathJax.Provider>{' '}
                seats for Kathmandu. And therefore, it has been allocated around
                10 seats.
              </Box>
              <Text>
                It is important to note that these examples are cherry-picked
                data from the list of all districts. Geography, most of the
                times, doesn't have such a significant effect as to add or
                decrease the number of seats allocated on the basis of
                population. It, in most of the cases, agrees with the allocation
                of population(because 90% factor of population is too heavy to
                be shifted by 10% area factor). Nevertheless, such a shift where
                area factor changes the allocation estimated by "just
                population" can be seen in a couple of other districts like
                Sunsari and Kapilvastu,
              </Text>
              <Text>
                Of course, this calculation can become non-feasible to apply to
                several cases, but it seems that such a method has been applied
                so as to ensure that the size of the district is also accounted
                to some extent for a maximum number of cases.
              </Text>
              <Text>
                There are a few districts where this kind of mathematical
                modelling hasn't be exactly followed to delineate the
                constituencies. One such example is Bardiya. While only
                population calculation denotes that a total of 2.66 seats needs
                to be allocated to Bardiya, only area calculation denotes that a
                total of 2.27 seats needs to be allocated. With 90-10 division,
                on total, an average of 2.61 seats(2.66*0.9+2.27*0.1) need to be
                allocated to the district. That would round off to have 3 seats
                allocated to the district. However, the district has been
                allocated just 2 seats.
              </Text>
              <Text>
                The story is similar with 4 other districts: Baitadi, Chitwan,
                Ilam and Makwanpur. An explanation for such could be that such
                districts have been allocated less than what should have been
                allocated as per the calculation to compensate for the
                allocation of more seats than the calculation suggests in some
                districts. In Manang, for example, calculation shows its
                allocation to stand at 0.29 seats(rounding off: 0 seats).
                However, since there is a provision that at least one seat needs
                to be allocated to a district, it has been allocated 1 seat.
                That extra seat might have been compensated by decreasing a seat
                in another district(Baitadi, Chitwan, Ilam, Makwanpur, Bardiya).
                Other districts that have benefitted from the at-least-one-seat
                system include Mustang(to be allocated: 0.48 seats) and
                Rasuwa(to be allocated: 0.42 seats). Also, since we are rounding
                off most of the times when allocating the seats, the neglected
                small bits of seat values need to be compensated as well. That
                can also justify why some districts do not exactly correspond to
                the mathematical model.
              </Text>
              <Text>
                At the end, it's again a curious analysis of the seat
                allocation. It is in no way a clear representation of what
                actually happened when the allocation was done. But it seems
                that the model fits the allocation to a fair degree. 
              </Text> */}
              <Text>
                The constitution of Nepal on Article "84" Sub article "1"
                section "a" , regarding the delineation of electoral
                constituencies, states that:
              </Text>
              <Box>
                <Text as='blockquote'>
                  One hundred and sixty five members to be elected through the
                  first past the post electoral system, with one being elected
                  from each election constituency of one hundred and sixty five
                  election constituencies delimited in the country on the basis
                  of geography and population.
                </Text>
                <Text as='cite'>
                  Source:{' '}
                  <Link
                    target='_blank'
                    rel='referrer noopener'
                    href='https://www.lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal'
                  >
                    https://www.lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal
                  </Link>
                </Text>
              </Box>
              <Text>
                One interesting things to note in this particular regard. How
                does the constitution seek to divide the electoral
                constituencies on? Presumably, it's geography and Population.
                While the term "Population" seems straight forward. The
                definition of population is generally understood to be the total
                number of people residing in a particular place at a particular
                time. Geography, meanwhile, is defined to be the nature and
                relative arrangement of places and physical features. What does
                Geography mean when division of electoral constituencies is
                concerned? Does it mean Area? Not exactly.
              </Text>
              <Stack spacing='0.5em'>
                <Text>
                  Turns out the constitution has a provision for an Electoral
                  Delimitation Committee mentioned on Article "286". According
                  to the article:
                </Text>
                <Text>
                  The Government of Nepal may constitute an Election
                  Constituency Delimitation Commission, to determine election
                  constituencies for the purpose of election to the members of
                  the Federal Parliament and members of the State Assemblies in
                  accordance with this Constitution, which shall consist of the
                  following as the Chairperson and members:
                </Text>
                <List spacing={2}>
                  <ListItem>
                    <ListIcon as={CBullet} />
                    Retired Judge of the Supreme Court -Chairperson
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CBullet} />
                    One Geographer -Member
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CBullet} />
                    One sociologist or demographer - Member
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CBullet} />
                    One administration expert or jurist - Member
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CBullet} />
                    Gazetted special class officer of the Government of Nepal -
                    Member Secretary
                  </ListItem>
                </List>
                <Text as='cite'>
                  Source:{' '}
                  <Link
                    target='_blank'
                    rel='referrer noopener'
                    href='https://www.lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal'
                  >
                    https://www.lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal
                  </Link>
                </Text>
              </Stack>
              <Box>
                <Text as='blockquote'>
                  And on the Sub Article 6 of the same article, the constitution
                  states that: While delimitating election constituencies
                  pursuant to clause (5), regard must be had to, inter alia, the
                  density of population, geographical specificity,
                  administrative and transportation convenience, community and
                  cultural aspects of the constituencies.
                </Text>
                <Text as='cite'>
                  Source:{' '}
                  <Link
                    target='_blank'
                    rel='referrer noopener'
                    href='https://www.lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal'
                  >
                    https://www.lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal
                  </Link>
                </Text>
              </Box>
              <Text>
                This clearly shows that area of a particular district is not, in
                fact, what the constitution means by "Geography". Rather
                specificity of geography, convenience and various abstract
                aspects have been included under the term. This denotes that
                while population remains the major mathematical basis for
                dividing the constituencies, there are other factors,
                non-mathematical and abstract, which can impact the division,
                and are to be sorted out by the Electoral Delimitation
                Committee. The same provision is echoed in the related law on
                Article "3" Sub article "1" published in the Nepal Gazette 2073
                which uses the terms "bhaugolik anukulata tatha
                bisisthata"(translated as geographical convenience and
                specificity) on top of Population Density.
              </Text>

              <Box>
                <Text mb='1em'>
                  However, the chairman of CDC was quoted on a The Kathmandu
                  Post Article published on 2017 August 13 as:
                </Text>
                <Text as='blockquote'>
                  According to CDC Chairman Kamal Narayan Das, 90 percent
                  weightage has been given to population and 10 percent to
                  geography while carving out the constituencies “after
                  thoroughly considering factors like geography, population
                  distribution, social diversity and laws regarding electoral
                  constituency”.
                </Text>
                <Text as='cite'>
                  Source:{' '}
                  <Link
                    target='_blank'
                    rel='referrer noopener'
                    href='https://kathmandupost.com/national/2017/08/31/cdc-submits-its-report-with-165-electoral-constituencies'
                  >
                    https://kathmandupost.com/national/2017/08/31/cdc-submits-its-report-with-165-electoral-constituencies
                  </Link>
                </Text>
              </Box>
              <Text>
                The chairman has been quoted to have explicitly mentioned 10%
                weightage to the geographical factors. What would 10% mean when
                the constitution gives an abstract identity to the "Geography"
                term? That's a question which remains to be pondered upon.
              </Text>
              <Text>
                Moving on, a special provision exists in the law published in
                the Nepal Gazette 2073 which states that every district must be
                given at least one electoral constituency irrespective of the
                Population of the district. And following the same provision,
                the districts like Mustang, Mugu, Dolpa have been given 1
                electoral constituency even though the population density is way
                below the ideal population density for an electoral
                constituency.
              </Text>
              <Box>
                <Text>
                  For Other districts, the division is nearly according to
                  population density except in a few districts where population
                  density seems not be followed. Let's take a mathematical dive
                  into what's actually happening. The ideal population per seat
                  can be calculated using the formula:
                </Text>
                <MathJax.Provider>
                  <MathJax.Node
                    formula={
                      '\\text{Population per seat} = \\frac{2,64,94,504}{165} \\approx 1,60,573'
                    }
                  />
                </MathJax.Provider>
              </Box>

              <Text>
                This means that ideally i.e. if division is to be made solely on
                the basis of population, every constituency should have a
                population of approximately 1,60,573. Since, there's also a
                factor of geography and also that population distribution
                ideally cannot be uniform on point, a variation in population
                per every seat can be expected to vary.
              </Text>

              <Box>
                <Text>
                  Let me clarify the notion with an example. Sarlahi has a
                  population of around 7,69,729 (2011 census). And since the
                  Population per seat for the country is 1,60,573:
                </Text>
                <MathJax.Provider>
                  <MathJax.Node
                    formula={
                      '\\text{Seats} = \\frac{7,69,729}{1,60,573} \\approx \\text{4.79 seats}'
                    }
                  />
                </MathJax.Provider>
              </Box>

              <Text>
                Now, if the division had just been on the basis of population,
                Sarlahi should have been allocated around 5 seats. However, it
                has been allocated 4 seats. It can be safely assumed that the
                "geography" factor came into play during the division in this
                case.
              </Text>

              <Box>
                <Text>
                  Also, With the population of around 17,44,240, on the basis of
                  population alone, the Kathmandu would have been allocated:
                </Text>
                <MathJax.Provider>
                  <MathJax.Node
                    formula={
                      '\\text{Seats} = \\frac{17,44,240}{1,60,573} \\approx \\text{10.86 seats}'
                    }
                  />
                </MathJax.Provider>
              </Box>

              <Text>
                It would, then, seem reasonable to allocate 11 seats to
                Kathmandu. However, since Kathmandu can be considered to have a
                high measure of geographical convenience, it has been allocated
                just 10 seats. Such an impact of "Geography" can be seen in
                other districts like Bardiya, Baitadi, Chitwan, Ilam and
                Makwanpur.
              </Text>

              <Text>
                A detailed list of how allocation of districts would have looked
                like if it had been done only on the basis of Population and how
                it looks in actual case has been attached below. Feel free to
                ponder more on how "Geography" factor might actually have been
                quantified.
              </Text>

              <Box
                className='scroll'
                overflowX='scroll'
                css={{
                  '&::-webkit-scrollbar': {
                    width: '10px',
                    height: '10px'
                  },
                  '&::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
                    borderRadius: '24px'
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#666',
                    borderRadius: '24px'
                  },
                  '&::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: '#777'
                  }
                }}
              >
                <Table variant='simple' mt='1em'>
                  {/* <TableCaption textAlign='start' position='fixed'>
                    District Data
                  </TableCaption> */}
                  <Thead>
                    {/* <Tr>
                      {props.cols.map(({ id, label }) => (
                        <Th key={id}>{label}</Th>
                      ))}
                    </Tr> */}
                    <Tr>
                      <Th>District</Th>
                      {/* <Th>Population at 2021*</Th> */}
                      <Th>Population at 2011</Th>
                      {/* <Th>Population at 2001</Th>
                      <Th>Population at 1981</Th> */}
                      <Th>Area (km²)</Th>
                      <Th>Zone</Th>
                      <Th title='Number of seats'>No. of Seats</Th>
                      <Th>Ideal population</Th>
                      <Th>Surplus Population</Th>
                      {/* <Th>Growth rate</Th> */}
                      <Th>Seats Gained</Th>
                      <Th title='Seats with respect to population'>
                        Seats w.r.t. population
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map(
                      ({
                        district,
                        pop1981,
                        pop2001,
                        pop1991,
                        pop2011,
                        popn2021,
                        areakm,
                        zone,
                        noOfSeats,
                        surplusPopn,
                        growthRate,
                        seatsWrtPop,
                        seatsGained,
                        idealPopn
                      }) => {
                        return (
                          <Tr key={district}>
                            <Td>{district}</Td>
                            {/* <Td>{Math.round(popn2021).toLocaleString()}</Td> */}
                            {/* <Td>{pop2001.toLocaleString()}</Td> */}
                            <Td>{pop2011.toLocaleString()}</Td>
                            {/* <Td>{pop1981.toLocaleString()}</Td> */}
                            <Td>{areakm.toLocaleString()}</Td>
                            <Td>{zone}</Td>
                            <Td>{noOfSeats}</Td>
                            <Td>{idealPopn.toLocaleString()}</Td>
                            <Td>{surplusPopn.toLocaleString()}</Td>
                            {/* <Td>{growthRate.toFixed(3)}</Td> */}
                            <Td>{seatsGained.toFixed(3)}</Td>
                            <Td>{seatsWrtPop.toFixed(3)}</Td>
                          </Tr>
                        )
                      }
                    )}
                    {/* <Tr>
                      {newRow[0].map(({ v, f }, idx) => (
                        <Td key={idx}>{f ? f : v}</Td>
                      ))}
                    </Tr> */}
                  </Tbody>
                </Table>
              </Box>
            </Stack>
          </Box>
        </Box>
      </MainLayout>
      <Footer />
    </>
  )
}

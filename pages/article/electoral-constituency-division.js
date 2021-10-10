/* eslint-disable react/no-unescaped-entities */
import data from '@/assets/data/district-data'
import {
  Box,
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
  Td
} from '@chakra-ui/react'
import MathJax from 'react-mathjax'
import CBullet from '@/components/typography/bullet'
import ArticleLayout from '@/components/articlelayout'

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
  const title = 'Electoral constituency division'

  return (
    <ArticleLayout
      title={title}
      image='electoral constituencies division.jpeg'
      alt='people are showing their voting card'
    >
      <Stack spacing='1em'>
        <Text>
          The constitution of Nepal on Article "84" Sub article "1" section "a",
          regarding the delineation of electoral constituencies, states that:
        </Text>
        <Box>
          <Text as='blockquote'>
            One hundred and sixty five members to be elected through the first
            past the post electoral system, with one being elected from each
            election constituency of one hundred and sixty five election
            constituencies delimited in the country on the basis of geography
            and population.
          </Text>
          <Text fontSize='smaller' mt='1em'>
            Source:{' '}
            {/* <Link
              target='_blank'
              rel='referrer noopener'
              href='https://www.lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal'
            >
              https://www.lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal
            </Link> */}
            "Federal Legislature" <em>Nepal Law Commission</em>, Part-8 Federal
            Legislature, September 9, 2018,
            lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal
          </Text>
        </Box>
        <Text>
          One interesting things to note in this particular regard. How does the
          constitution seek to divide the electoral constituencies on?
          Presumably, it's geography and Population. While the term "Population"
          seems straight forward. The definition of population is generally
          understood to be the total number of people residing in a particular
          place at a particular time. Geography, meanwhile, is defined to be the
          nature and relative arrangement of places and physical features. What
          does Geography mean when division of electoral constituencies is
          concerned? Does it mean Area? Not exactly.
        </Text>
        <Stack spacing='0.5em'>
          <Text>
            Turns out the constitution has a provision for an Electoral
            Delimitation Committee mentioned on Article "286". According to the
            article:
          </Text>
          <Text>
            The Government of Nepal may constitute an Election Constituency
            Delimitation Commission, to determine election constituencies for
            the purpose of election to the members of the Federal Parliament and
            members of the State Assemblies in accordance with this
            Constitution, which shall consist of the following as the
            Chairperson and members:
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
              Gazetted special class officer of the Government of Nepal - Member
              Secretary
            </ListItem>
          </List>
          {/* <Text as='cite'>
            Source:{' '}
            <Link
              target='_blank'
              rel='referrer noopener'
              href='https://www.lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal'
            >
              https://www.lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal
            </Link>
          </Text> */}
        </Stack>
        <Box>
          <Text as='blockquote'>
            And on the Sub Article 6 of the same article, the constitution
            states that:{' '}
            <em>
              While delimitating election constituencies pursuant to clause (5),
              regard must be had to, inter alia, the density of population,
              geographical specificity, administrative and transportation
              convenience, community and cultural aspects of the constituencies.
            </em>
          </Text>
          {/* <Text as='cite'>
            Source:{' '}
            <Link
              target='_blank'
              rel='referrer noopener'
              href='https://www.lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal'
            >
              https://www.lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal
            </Link>
          </Text> */}
        </Box>
        <Text>
          This clearly shows that area of a particular district is not, in fact,
          what the constitution means by "Geography". Rather specificity of
          geography, convenience and various abstract aspects have been included
          under the term. This denotes that while population remains the major
          mathematical basis for dividing the constituencies, there are other
          factors, non-mathematical and abstract, which can impact the division,
          and are to be sorted out by the Electoral Delimitation Committee. The
          same provision is echoed in the related law on Article "3" Sub article
          "1" published in the Nepal Gazette 2073 which uses the terms
          "bhaugolik anukulata tatha bisisthata"(translated as geographical
          convenience and specificity) on top of Population Density.
        </Text>

        <Box>
          <Text mb='1em'>
            However, the chairman of CDC was quoted on a The Kathmandu Post
            Article published on 2017 August 13 as:
          </Text>
          <Text as='blockquote'>
            According to CDC Chairman Kamal Narayan Das, 90 percent weightage
            has been given to population and 10 percent to geography while
            carving out the constituencies “after thoroughly considering factors
            like geography, population distribution, social diversity and laws
            regarding electoral constituency”.
          </Text>
          <Text mt='1em' fontSize='smaller'>
            Source:{' '}
            {/* <Link
              target='_blank'
              rel='referrer noopener'
              href='https://kathmandupost.com/national/2017/08/31/cdc-submits-its-report-with-165-electoral-constituencies'
            >
              https://kathmandupost.com/national/2017/08/31/cdc-submits-its-report-with-165-electoral-constituencies
            </Link> */}
            Giri, Sanjiv. "CDC submits its report with 165 electoral
            constituencies", <em>The Kathmandu Post</em>,
            kathmandupost.com/national/2017/08/31/cdc-submits-its-report-with-165-electoral-constituencies
          </Text>
        </Box>
        <Text>
          The chairman has been quoted to have explicitly mentioned 10%
          weightage to the geographical factors. What would 10% mean when the
          constitution gives an abstract identity to the "Geography" term?
          That's a question which remains to be pondered upon.
        </Text>
        <Text>
          Moving on, a special provision exists in the law published in the
          Nepal Gazette 2073 which states that every district must be given at
          least one electoral constituency irrespective of the Population of the
          district. And following the same provision, the districts like
          Mustang, Mugu, Dolpa have been given 1 electoral constituency even
          though the population density is way below the ideal population
          density for an electoral constituency.
        </Text>
        <Box>
          <Text>
            For Other districts, the division is nearly according to population
            density except in a few districts where population density seems not
            be followed. Let's take a mathematical dive into what's actually
            happening. The ideal population per seat can be calculated using the
            formula:
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
          This means that ideally i.e. if division is to be made solely on the
          basis of population, every constituency should have a population of
          approximately 1,60,573. Since, there's also a factor of geography and
          also that population distribution ideally cannot be uniform on point,
          a variation in population per every seat can be expected to vary.
        </Text>

        <Box>
          <Text>
            Let me clarify the notion with an example. Sarlahi has a population
            of around 7,69,729 (2011 census). And since the Population per seat
            for the country is 1,60,573:
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
          Now, if the division had just been on the basis of population, Sarlahi
          should have been allocated around 5 seats. However, it has been
          allocated 4 seats. It can be safely assumed that the "geography"
          factor came into play during the division in this case.
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
          It would, then, seem reasonable to allocate 11 seats to Kathmandu.
          However, since Kathmandu can be considered to have a high measure of
          geographical convenience, it has been allocated just 10 seats. Such an
          impact of "Geography" can be seen in other districts like Bardiya,
          Baitadi, Chitwan, Ilam and Makwanpur.
        </Text>

        <Text>
          A detailed list of how allocation of districts would have looked like
          if it had been done only on the basis of Population and how it looks
          in actual case has been attached below. Feel free to ponder more on
          how "Geography" factor might actually have been quantified.
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
        <Text fontSize='smaller' mt='1.5em'>
          Reference: UNFPA NEPAL 2017, "Nepal Population Situation Analysis",
          nepal.unfpa.org/sites/default/files/pub-pdf/Nepal%20Population%20Situation%20Analysis.pdf
        </Text>
      </Stack>
    </ArticleLayout>
  )
}

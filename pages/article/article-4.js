/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Stack,
  Text,
  List,
  ListIcon,
  ListItem,
  Table,
  Thead,
  Tbody,
  TableCaption,
  Th,
  Tr,
  Td,
  UnorderedList,
  Link,
  Image
} from '@chakra-ui/react'
import { Heading3 } from '@/components/typography'
import CBullet from '@/components/typography/bullet'
import ArticleLayout from '@/components/articlelayout'

export default function Article() {
  const title =
    'Legal provisions for representation of minorities and underrepresented'

  return (
    <ArticleLayout
      title={title}
      image='legal provision for Minority representation.jpeg'
      alt='politicians standing in samsad and clapping hand'
    >
      <Stack spacing='2em'>
        <Box>
          <Heading3>Rules for making a PR list in HoR:</Heading3>
          <List spacing={2}>
            <ListItem>
              <ListIcon as={CBullet} />A closed list of at least 10% of total
              seats and at most the total seats must be submitted.
            </ListItem>
            <ListItem>
              <ListIcon as={CBullet} />
              50% of candidates in the list need to be women.
            </ListItem>
            <ListItem>
              <ListIcon as={CBullet} />
              The list should resemble people from Dalit, Adibasi/Janajati,
              Tharu, Madhesi, Khas-Arya, Muslim as per the mentioned percentage
              as far as possible.
            </ListItem>
            <ListItem>
              <ListIcon as={CBullet} />
              Disadvantaged groups and physically challenged people should also
              be present in the list as far as possible.
            </ListItem>
          </List>

          <Table variant='simple' mt='1em'>
            <TableCaption>
              Close list percentage and actual percentage in population of
              different ethnic groups
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Ethnicity</Th>
                <Th isNumeric>Closed List Percentage</Th>
                <Th isNumeric>Actual Percentage in the population (approx)</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Dalit</Td>
                <Td isNumeric>13.8%</Td>
                <Td isNumeric>12.62%</Td>
              </Tr>
              <Tr>
                <Td>Adivasi Janajati</Td>
                <Td isNumeric>28.7%</Td>
                <Td isNumeric>27.29%</Td>
              </Tr>
              <Tr>
                <Td>Khas Arya</Td>
                <Td isNumeric>31.2%</Td>
                <Td isNumeric>31.25%</Td>
              </Tr>
              <Tr>
                <Td>Madhesi</Td>
                <Td isNumeric>15.3%</Td>
                <Td isNumeric>15.37%</Td>
              </Tr>
              <Tr>
                <Td>Tharu</Td>
                <Td isNumeric>6.6%</Td>
                <Td isNumeric>7.7%</Td>
              </Tr>
              <Tr>
                <Td>Muslim</Td>
                <Td isNumeric>4.4%</Td>
                <Td isNumeric>4.39%</Td>
              </Tr>
              <Tr>
                <Td>Other/Unidentified</Td>
                <Td isNumeric></Td>
                <Td isNumeric>1.39%</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <Box>
          <Heading3>Present Status:</Heading3>
          <Text>
            The representation, however, is only for Closed List. It seems that
            there is no total representation quota ethnicity wise for the whole
            parliament (except through PR) unlike in the case of women where
            such a quota exists. (1/3rd of Federal Parliament)
          </Text>
          <Image
            display='block'
            mt='1em'
            src='/articles/1.png'
            alt='Ethnic Distribution in Parliament'
            title='Ethnic Distribution in Parliament'
            objectFit='cover'
            boxSize={450}
          />
          <Image
            display='block'
            my='1em'
            src='/articles/2.png'
            alt='Gender Distribution in Parliament'
            title='Gender Distribution in Parliament'
            objectFit='cover'
            boxSize={450}
          />
          <Text>
            This is the present proportion of total members in HoR+ National
            Assembly (275+59) which is not very representative of the actual
            proportion of these ethnic groups in the country. Women constitute
            around 33.83% of total members of the Federal Parliament.
          </Text>
        </Box>
        <Box>
          <Text>
            Through FPTP and PR, the status of elected representatives in HoR is
            shown below:
          </Text>
          <Image
            display='block'
            my='1em'
            src='/articles/3.png'
            alt='Ethnic Distribution, HoR directly elected and HoR PR'
            title='Ethnic Distribution, HoR directly elected and HoR PR'
            objectFit='contain'
          />
          <Text>
            It can be seen that most of the people from ethnic groups, other
            than Khas Arya, have been selected from the PR system. The
            reservations under the PR system seem to have done their work
            though. The representation through the PR system is representative
            of the actual composition of the ethnic groups. 
          </Text>
        </Box>
        <Box>
          <Text>Similar is the case with women:</Text>
          <Image
            display='block'
            mt='1em'
            src='/articles/4.png'
            alt='Gender distribution in House of Representatives'
            title='Gender distribution in House of Representatives'
            objectFit='contain'
          />
        </Box>
        <Heading3>Election composition of National Assembly</Heading3>
        <Box>
          <Heading3>Through Voting</Heading3>
          <Text>
            Each province will have following members represented in the
            National Assembly after being elected from each province(to be voted
            by Provincial Assembly members + Mayors and Deputy mayors of
            municipal council + Chairmen and deputy chairmen of Village council
            inside the Province)
          </Text>
          <List spacing={2}>
            <ListItem>
              <ListIcon as={CBullet} />3 women (STV, Single Transferable Voting)
            </ListItem>
            <ListItem>
              <ListIcon as={CBullet} />1 Dalit (FPTP)
            </ListItem>
            <ListItem>
              <ListIcon as={CBullet} />1 physically challenged or minority group
              (FPTP)
            </ListItem>
            <ListItem>
              <ListIcon as={CBullet} />3 members except from the groups listed
              able (STV, Single Transferable Voting)
            </ListItem>
          </List>
        </Box>
        <Box>
          <Heading3>Nomination</Heading3>
          <Text>
            Three members are appointed, with at least one woman, by the
            President on the recommendation of the Government of Nepal. That
            makes 8 * 7 + 3 = 59 members in the NA. There are 21 seats reserved
            for women through voting and 1 seat reserved through appointment
            making a total of 22 reserved seats for women in the National
            Assembly(37.28%). Dalits have been reserved a total of 7 out of 59
            seats(11.86%). Minority groups have a reservation but the
            composition has not been mentioned as the reservation for Physically
            challenged and minority groups has been combined to be a single
            reservation.
          </Text>
        </Box>
        <Text fontSize='smaller' mt='1.5em'>
          Reference:{' '}
          <UnorderedList spacing={1}>
            <li>
              {/* <Link
                href='https://election.gov.np/source/%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%9A%E0%A4%A8%20%E0%A4%95%E0%A4%BE%E0%A4%A8%E0%A5%82%E0%A4%A8/%E0%A5%A7-%E0%A4%90%E0%A4%A8/%E0%A5%AD-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A4%E0%A4%BF%E0%A4%A8%E0%A4%BF%E0%A4%A7%E0%A4%BF%20%E0%A4%B8%E0%A4%AD%E0%A4%BE%20%E0%A4%B8%E0%A4%A6%E0%A4%B8%E0%A5%8D%E0%A4%AF%20%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%9A%E0%A4%A8%20%E0%A4%90%E0%A4%A8%2C%20%E0%A5%A8%E0%A5%A6%E0%A5%AD%E0%A5%AA.pdf'
                target='_blank'
                rel='referrer noopener'
              >
                ७-प्रतिनिधि सभा सदस्य निर्वाचन ऐन, २०७४.pdf (Page 15, 32)
              </Link> */}
              प्रतिनिधि सभा, Page 15, 32,
              https://election.gov.np/source/%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%9A%E0%A4%A8%20%E0%A4%95%E0%A4%BE%E0%A4%A8%E0%A5%82%E0%A4%A8/%E0%A5%A7-%E0%A4%90%E0%A4%A8/%E0%A5%AD-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A4%E0%A4%BF%E0%A4%A8%E0%A4%BF%E0%A4%A7%E0%A4%BF%20%E0%A4%B8%E0%A4%AD%E0%A4%BE%20%E0%A4%B8%E0%A4%A6%E0%A4%B8%E0%A5%8D%E0%A4%AF%20%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%9A%E0%A4%A8%20%E0%A4%90%E0%A4%A8%2C%20%E0%A5%A8%E0%A5%A6%E0%A5%AD%E0%A5%AA.pdf
            </li>
            <li>
              {/* <Link
                href='https://www.lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal'
                target='_blank'
                rel='referrer noopener'
              >
                https://www.lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal
              </Link> */}
              Paswan, Bhola. "Dalits and women the most under-represented in
              Parliament" <em>the Record</em>, March 3, 2018,
              recordnepal.com/dalits-and-women-the-most-under-represented-in-parliament
            </li>
            <li>
              {/* <Link
                href='https://www.recordnepal.com/dalits-and-women-the-most-under-represented-in-parliament'
                target='_blank'
                rel='referrer noopener'
              >
                https://www.recordnepal.com/dalits-and-women-the-most-under-represented-in-parliament
              </Link> */}
              "Federal Legislature" <em>Nepal Law Commission</em>, Part-8
              Federal Legislature, September 9, 2018,
              lawcommission.gov.np/en/archives/category/documents/prevailing-law/constitution/constitution-of-nepal
            </li>
          </UnorderedList>
        </Text>
      </Stack>
    </ArticleLayout>
  )
}

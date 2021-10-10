/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Link, List, ListIcon, ListItem } from '@chakra-ui/react'
import { Heading3 } from '@/components/typography'
import CBullet from '@/components/typography/bullet'
import ArticleLayout from '@/components/articlelayout'

export default function Article() {
  const title = 'Introduction to electoral systems in Nepal'

  return (
    <ArticleLayout
      title={title}
      image='intro to electoral system.jpeg'
      alt='a man with red cap is pasting the poster in voting box'
    >
      <Text mb='1em'>
        An electoral system or voting system is a set of rules that determine
        how elections and referendums are conducted and how their results are
        determined. 
      </Text>
      <Box mb='2em'>
        <Heading3>Which electoral system is used and how?</Heading3>
        <Text>
          The House of Representatives (HoR) has 275 elected seats while the
          State Assemblies have 550 seats (SAs). The SAs and the House of
          Representatives will be chosen using a mixed electoral system, with 60
          percent of representatives elected by first-past-the-post (FPTP) and
          40 percent using proportional representation utilizing closed lists of
          candidates submitted by parties. On Election Day, voters therefore
          cast four votes: one for an FPTP candidate for the HoR, one for an
          FPTP candidate for their SA, one for the HoR party list, and one for
          the SA party list.
        </Text>
        <Text fontSize='smaller' mt='1em'>
          Source: "Elections in Nepal"{' '}
          <em>International Foundation for Electoral Systems</em>, November 21,
          2017,
          ifes.org/sites/default/files/2017_ifes_nepal_house_of_representatives_and_state_assembly_elections_faqs_final_1.pdf
          {/* <Link
            target='_blank'
            rel='referrer noopener'
            href='https://www.ifes.org/sites/default/files/2017_ifes_nepal_house_of_representatives_and_state_assembly_elections_faqs_final_1.pdf'
          >
            https://www.ifes.org/sites/default/files/2017_ifes_nepal_house_of_representatives_and_state_assembly_elections_faqs_final_1.pdf
          </Link> */}
        </Text>
      </Box>
      <Box mb='1em'>
        <Heading3>Constituencies of Nepal according to districts:</Heading3>
        {/* <Link
          target='_blank'
          rel='referrer noopener'
          href='http://www.election.gov.np/election/en/district-wise-constituency-map.html '
        >
          http://www.election.gov.np/election/en/district-wise-constituency-map.html
        </Link> */}
        <Text fontSize='smaller'>
          "District Wise Constituency Map",{' '}
          <em>Election Commission of Nepal</em>,
          election.gov.np/election/en/district-wise-constituency-map.html
        </Text>
      </Box>
      <Box mb='2em'>
        <Heading3>Advantages of Electoral Constituencies</Heading3>
        <List spacing={2}>
          <ListItem>
            <ListIcon as={CBullet} />
            Provide voters with strong constituency representation by assigning
            each voter a single, easily recognizable district representative.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            Stimulate constituency service by assigning each voter an easily
            recognized 'ombudsman'.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            Maximize accountability because a single representative can be held
            accountable and re-elected or rejected in the next election.
          </ListItem>
        </List>
        <Text fontSize='smaller' mt='1em'>
          Source:{' '}
          {/* <Link
            target='_blank'
            rel='referrer noopener'
            href='https://aceproject.org/main/english/bd/bda02a01.htm'
          >
            https://aceproject.org/main/english/bd/bda02a01.htm
          </Link> */}
          "Single-Member Districts: Advantages and Disadvantages",{' '}
          <em>Ace The Electoral knowledge Network</em>,
          aceproject.org/main/english/bd/bda02a01.htm
        </Text>
      </Box>
      <Box mb='2em'>
        <Heading3>Disadvantages of Electoral Constituencies</Heading3>
        <List spacing={2}>
          <ListItem>
            <ListIcon as={CBullet} />
            Must be redrawn on a regular basis in order to maintain population
            balance.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            They are typically artificial geographic entities whose boundaries
            do not clearly designate clearly recognized communities, and so have
            no special value to citizens.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            They are unable to achieve proportional representation for political
            parties due to their inclination to over-represent the majority
            party while under-representing other parties.
          </ListItem>
        </List>
      </Box>
      <Box mb='2em'>
        <Heading3>How were the electoral constituencies delineated?</Heading3>
        <Text>
          On July 19, 2017, the Government of Nepal formed an independent
          Electoral Constituency Delineation Commission (ECDC) to delineate the
          165 federal and 330 state constituencies required by the constitution.
          Each federal constituency is divided into two state-level
          constituencies. The ECDC consulted a variety of stakeholders, and
          demarcated the boundaries based on: Constitutional requirement to have
          at least one electoral constituency in each of the 77 districts, and
          Population5 as the primary and geographic considerations as the
          secondary criteria amid other considerations such as transportation
          and access to government services. The ECDC submitted its report to
          the government on August 31, 2017. The constituency boundaries will
          prevail for the next 20 years, and cannot be contested in any court.
        </Text>
      </Box>
      <Box mb='2em'>
        <Heading3>Mixed Electoral System</Heading3>
        <Text>
          A mixed system is an electoral system that combines a major voting
          system with an element of proportional representation.
        </Text>
      </Box>
      <Box mb='2em'>
        <Heading3>Advantages of FPTP</Heading3>
        <List spacing={2}>
          <ListItem>
            <ListIcon as={CBullet} />
            It provides a clear-cut choice for voters between two main parties.
            The inbuilt disadvantages faced by third and fragmented minority
            parties under FPTP in many cases cause the party system to gravitate
            towards a party of the ‘left’ and a party of the ‘right’,
            alternating in power. Third parties often wither away and almost
            never reach a level of popular support above which their national
            vote yields a comparable percentage of seats in the legislature.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            It gives rise to single-party governments.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            It gives rise to a coherent opposition in the legislature. In
            theory, the flip side of a strong single-party government is that
            the opposition is also given enough seats to perform a critical
            checking role and present itself as a realistic alternative to the
            government of the day. It advantages broadly-based political
            parties. In severely ethnically or regionally divided societies,
            FPTP is commended for encouraging political parties to be ‘broad
            churches’, encompassing many elements of society, particularly when
            there are only two major parties and many different societal groups.
            These parties can then field a diverse array of candidates for
            election. In Malaysia, for example, the Barisan Nasional government
            is made up of a broadly-based umbrella movement which fields Malay,
            Chinese, and Indian candidates in areas of various ethnic
            complexions.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            It excludes extremist parties from representation in the
            legislature. Unless an extremist minority party’s electoral support
            is geographically concentrated, it is unlikely to win any seats
            under FPTP. (By contrast, under a List PR system with a single
            national-level district and a large number of seats, a fraction of 1
            per cent of the national vote can ensure representation in the
            legislature.)
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            It promotes a link between constituents and their representatives,
            as it produces a legislature made up of representatives of
            geographical areas. Elected members represent defined areas of
            cities, towns, or regions rather than just party labels. Some
            analysts have argued that this ‘geographic accountability’ is
            particularly important in agrarian societies and in developing
            countries.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            It allows voters to choose between people rather than just between
            parties.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            It gives a chance for popular independent candidates to be elected.
            This may be particularly important in developing party systems,
            where politics still revolves more around extended ties of family,
            clan, or kinship and is not based on strong party political
            organizations.
          </ListItem>
        </List>
      </Box>
      <Box mb='2em'>
        <Heading3>Disadvantages of FPTP </Heading3>
        <List spacing={2}>
          <ListItem>
            <ListIcon as={CBullet} />
            It excludes smaller parties from ‘fair’ representation, in the sense
            that a party which wins approximately, say, 10 per cent of the votes
            should win approximately 10 per cent of the legislative seats.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            It excludes minorities from fair representation. As a rule, under
            FPTP, parties put up the most broadly acceptable candidate in a
            particular district so as to avoid alienating the majority of
            electors. 
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            It can encourage the development of political parties based on clan,
            ethnicity or region, which may base their campaigns and policy
            platforms on conceptions that are attractive to the majority of
            people in their district or region but exclude or are hostile to
            others. This has been an ongoing problem in African countries like
            Malawi and Kenya, where large communal groups tend to be regionally
            concentrated. The country is thus divided into geographically
            separate party strongholds, with little incentive for parties to
            make appeals outside their home region and cultural–political base.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            It exaggerates the phenomenon of ‘regional fiefdoms’ where one party
            wins all the seats in a province or area. If a party has strong
            support in a particular part of a country, winning a plurality of
            votes, it will win all, or nearly all, of the seats in the
            legislature for that area. This both excludes minorities in that
            area from representation and reinforces the perception that politics
            is a battleground defined by who you are and where you live rather
            than what you believe in. This has long been put forward as an
            argument against FPTP in Canada.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            It leaves a large number of wasted votes which do not go towards the
            election of any candidate. This can be particularly dangerous if
            combined with regional fiefdoms, because minority party supporters
            in the region may begin to feel that they have no realistic hope of
            ever electing a candidate of their choice. It can also be dangerous
            where alienation from the political system increases the likelihood
            that extremists will be able to mobilize anti-system movements.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            It can cause vote-splitting. Where two similar parties or candidates
            compete under FPTP, the vote of their potential supporters is often
            split between them, thus allowing a less popular party or candidate
            to win the seat. Papua New Guinea provides a particularly clear
            example.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            It may be unresponsive to changes in public opinion. A pattern of
            geographically concentrated electoral support in a country means
            that one party can maintain exclusive executive control in the face
            of a substantial drop in overall popular support. In some
            democracies under FPTP, a fall from 60 per cent to 40 per cent of a
            party’s share of the popular vote nationally can result in a fall
            from 80 per cent to 60 per cent in the number of seats held, which
            does not affect its overall dominant position. Unless sufficient
            seats are highly competitive, the system can be insensitive to
            swings in public opinion.
          </ListItem>
        </List>
      </Box>
      <Box mb='2em'>
        <Heading3>Advantages of PR system</Heading3>
        <List spacing={2}>
          <ListItem>
            <ListIcon as={CBullet} />
            Faithfully translate votes cast into seats won, and thus avoid some
            of the more destabilizing and ‘unfair’ results thrown up by
            plurality/majority electoral systems. ‘Seat bonuses’ for the larger
            parties are minimized, and small parties can have their voice heard
            in the legislature.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            Encourage or require the formation of political parties or groups of
            like-minded candidates to put forward lists.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            Give rise to very few wasted votes. When thresholds are low, almost
            all votes cast in PR elections go towards electing a candidate of
            choice.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            Facilitate minority parties’ access to representation. Unless the
            threshold is unduly high, or the district magnitude is unusually
            low, then any political party with even a small percentage of the
            vote can gain representation in the legislature. This fulfils the
            principle of inclusion, which can be crucial to stability in divided
            societies and has benefits for decision making in established
            democracies, such as achieving a more balanced representation of
            minorities in decision-making bodies and providing role models of
            minorities as elected representatives.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            Encourage parties to campaign beyond the districts in which they are
            strong or where the results are expected to be close. The incentive
            under PR systems is to maximize the overall vote regardless of where
            those votes might come from. Every vote, even from areas where a
            party is electorally weak, goes towards gaining another seat.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            Restrict the growth of ‘regional fiefdoms’. Because PR systems
            reward minority parties with a minority of the seats, they are less
            likely to lead to situations where a single party holds all the
            seats in a given province or district. This can be particularly
            important to minorities in a province which may not have significant
            regional concentrations or alternative points of access to power.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            Lead to greater continuity and stability of policy.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            Make power-sharing between parties and interest groups more visible.
            In many new democracies, power-sharing between the numerical
            majority of the population who hold political power and a small
            minority who hold economic power is an unavoidable reality. Where
            the numerical majority dominates the legislature and a minority sees
            its interests expressed in the control of the economic sphere,
            negotiations between different power blocks are less visible, less
            transparent, and less accountable (e.g. in Zimbabwe during its first
            20 years of independence). It has been argued that PR, by including
            all interests in the legislature, offers a better hope that
            decisions will be taken in the public eye and by a more inclusive
            cross-section of the society.
          </ListItem>
        </List>
      </Box>
      <Box mb='2em'>
        <Heading3>Disadvantages of PR system</Heading3>
        <List spacing={2}>
          <ListItem>
            <ListIcon as={CBullet} />
            Coalition governments, which in turn lead to legislative gridlock
            and consequent inability to carry out coherent policies. There are
            particularly high risks during an immediate post-conflict transition
            period, when popular expectations of new governments are high. Quick
            and coherent decision making can be impeded by coalition cabinets
            and governments of national unity which are split by factions.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />A destabilizing fragmentation of the party
            system. PR can reflect and facilitate a fragmentation of the party
            system. It is possible that extreme pluralism can allow tiny
            minority parties to hold larger parties to ransom in coalition
            negotiations. In this respect, the inclusiveness of PR is cited as a
            drawback of the system. In Israel, for example, extremist religious
            parties are often crucial to the formation of a government, while
            Italy endured many years of unstable shifting coalition governments.
            Democratizing countries are often fearful that PR will allow
            personality-based and ethnic-cleavage parties to proliferate in
            their undeveloped party systems.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />A platform for extremist parties. In a
            related argument, PR systems are often criticized for giving a space
            in the legislature to extremist parties of the left or the right. It
            has been argued that the collapse of Weimar Germany was in part due
            to the way in which its PR electoral system gave a toehold to
            extremist groups of the extreme left and right.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            Governing coalitions which have insufficient common ground in terms
            of either their policies or their support base. These coalitions of
            convenience are sometimes contrasted with coalitions of commitment
            produced by other systems in which parties tend to be reciprocally
            dependent on the votes of supporters of other parties for their
            election, and the coalition may thus be stronger.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            Small parties getting a disproportionately large amount of power.
            Large parties may be forced to form coalitions with much smaller
            parties, giving a party that has the support of only a small
            percentage of the votes the power to veto any proposal that comes
            from the larger parties.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            The inability of the voter to enforce accountability by throwing a
            party out of power or a particular candidate out of office. Under a
            PR system, it may be very difficult to remove a reasonably-sized
            center party from power. When governments are usually coalitions,
            some political parties are ever present in government, despite weak
            electoral performances from time to time.
          </ListItem>
          <ListItem>
            <ListIcon as={CBullet} />
            Difficulties either for voters to understand or for the electoral
            administration to implement the sometimes complex rules of the
            system. Some PR systems are considered to be more difficult than
            non-PR systems and may require more voter education and training of
            poll workers to work successfully.
          </ListItem>
        </List>
      </Box>
      <Box mb='2em'>
        <Heading3>Necessity of Mixed Electoral System</Heading3>
        <Text>
          While MES (Mixed Electoral System) maintains the proportionality
          advantages of PR systems, it also assures that elected legislators are
          assigned to geographical districts. However, in situations where
          voters have two votes—one for the party and one for their local
          representative—it is not always clear that the local representative
          vote is less relevant than the party vote in determining overall seat
          allocation in the legislature. Furthermore, MES can create two types
          of legislators: one who is primarily responsible to and subservient to
          a constituency, and another who is drawn from the national party list
          and is obedient to the party. This could have repercussions for the
          cohesion of elected political party groups.
        </Text>
      </Box>
      <Box>
        <Heading3>
          Can the FPTP:PR ratio be changed in any way without breaching the
          constitution?
        </Heading3>
        <Text>
          When the percentage of women elected from FPTP is kept constant; I.e.,
          33.33%, the ratio can be changed without breaching the constitution.
        </Text>
      </Box>
    </ArticleLayout>
  )
}

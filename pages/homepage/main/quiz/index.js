import {
  Box,
  Flex,
  Button,
  Center,
  useColorMode,
  Stack,
  Link,
  Text,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react'

import { useState } from 'react'
import SpherePulse from '@/assets/motion/SpherePulse'
import { Line, SectionHeader } from '@/components/layout'
import { Title, Heading3, Body } from '@/components/typography'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'
import {
  FaCheckCircle,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaSync,
  FaTimesCircle
} from 'react-icons/fa'
import CBullet from '@/components/typography/bullet'

function Quiz({ ...props }) {
  const [position, setPos] = useState(0)
  const [clicked, setClicked] = useState(false)
  const [score, setScore] = useState(0)
  const [info, showInfo] = useState(false)
  const [correct, setIsCorrect] = useState(null)

  const [weakPoint, setWeak] = useState([])

  const newWeakPoint = new Set(weakPoint)

  const quiz = [
    {
      question: 'Which minority dominates the parliament of Nepal?',
      answers: [
        {
          answer: 'Khas arya',
          isCorrect: true
        },
        { answer: 'Tharu', isCorrect: false },
        { answer: 'Dalit', isCorrect: false },
        { answer: 'Adibasi', isCorrect: false }
      ],
      link: 'minority-representation'
    },
    {
      question:
        'Who is the only non-Khas Prime minister in the history of Nepal?',
      answers: [
        {
          answer: 'Marich Man Singh Shrestha',
          isCorrect: true
        },
        { answer: 'Tanka Prasad Acharya', isCorrect: false },
        { answer: 'Surya Bahadur Thapa', isCorrect: false },
        { answer: 'Gehendra Bahadur Rajbhandari', isCorrect: false }
      ],
      link: 'minority-representation'
    },
    {
      question:
        'What percent of women should be there in the parliament of Nepal according to the constitution of Nepal?',
      answers: [
        {
          answer: '33.33%',
          isCorrect: true
        },
        { answer: '20%', isCorrect: false },
        { answer: '50.2%', isCorrect: false },
        { answer: '16.67%', isCorrect: false }
      ],
      link: 'minority-representation'
    },
    {
      question: 'How many electoral constituencies does Kathmandu have?',
      answers: [
        {
          answer: '3',
          isCorrect: false
        },
        { answer: '10', isCorrect: true },
        { answer: '15', isCorrect: false },
        { answer: '8', isCorrect: false }
      ],
      link: 'electoral-constituency-division'
    },
    {
      question:
        'What percent approximates the number of women directly elected to the lower house of the federal parliament in Nepal in the present?',
      answers: [
        { answer: '33%', isCorrect: false },
        { answer: '2.57%', isCorrect: false },
        { answer: '25%', isCorrect: false },
        { answer: '3.64%', isCorrect: true }
      ],
      link: 'article-4'
    },

    {
      question:
        'What percent of representatives are chosen from the First Past the Post?',
      answers: [
        { answer: '20%', isCorrect: false },
        { answer: '80%', isCorrect: false },
        { answer: '100%', isCorrect: false },
        { answer: '60%', isCorrect: true }
      ],
      link: 'introduction-to-electoral-systems-in-nepal'
    },
    {
      question:
        'What is the minimum number of electoral constituencies in each district?',
      answers: [
        { answer: '2', isCorrect: false },
        { answer: '0', isCorrect: false },
        { answer: '3', isCorrect: false },
        { answer: '1', isCorrect: true }
      ],
      link: 'introduction-to-electoral-systems-in-nepal'
    },
    {
      question: 'Which was the last Hindu country of the world?',
      answers: [
        { answer: 'India', isCorrect: false },
        { answer: 'Nepal', isCorrect: true },
        { answer: 'Mauritius', isCorrect: false },
        { answer: 'Cambodia', isCorrect: false }
      ],
      link: 'changes-in-governance-structure-in-nepal'
    },

    {
      question:
        'All three of my sons became Prime Ministers of Nepal. Who am I?',
      answers: [
        { answer: 'Krishna Prasad Koirala', isCorrect: true },
        { answer: 'Junga Bahadur Rana', isCorrect: false },
        { answer: 'Chandra Shumsher JBR', isCorrect: false },
        { answer: 'Bhim Shumsher JBR', isCorrect: false }
      ],
      link: 'changes-in-governance-structure-in-nepal'
    }
  ]

  const { secondary, primary } = useColorSwitcher()

  const { colorMode } = useColorMode()

  const light = colorMode === 'light'

  let timeout

  function handleClick(isCorrect) {
    setClicked(true)

    if (!clicked) {
      showInfo(true)
      setTimeout(() => {
        showInfo(false)
      }, 2000)
      if (isCorrect) {
        setScore((p) => p + 1)
        setIsCorrect(true)
      } else {
        const { link } = quiz[position]
        setWeak((prev) => {
          return [...prev, link]
        })
        setIsCorrect(false)
      }

      // if (timeout) {
      //   clearTimeout(timeout)
      //   timeout = null
      // } else {
      timeout = setTimeout(() => {
        rightClick()
      }, 3000)
      // }
    }
  }

  function leftClick(e) {
    clearTimeout(timeout)
    if (position !== 0 && position < quiz.length) setPos((pos) => pos - 1)
    setClicked(false)
    e.preventDefault()
  }

  function rightClick() {
    clearTimeout(timeout)
    position < quiz.length && setPos((pos) => pos + 1)
    setClicked(false)
    // e.preventDefault()
  }

  function startAgain() {
    setPos(0)
    setScore(0)
    setWeak([])
  }

  function formateProjectName(name) {
    if (name === 'article-4')
      return 'Legal Provisions for Representation of Minorities and Underrepresented'
    else {
      return name
        .split('-')
        .map((word) => {
          if (word === 'to' || word === 'in') {
            return word[0].toLowerCase() + word.slice(1)
          } else {
            return word[0].toUpperCase() + word.slice(1)
          }
        })
        .join(' ')
    }
  }

  return (
    <Box as='section' outline='0' tabIndex={-1} {...props} w='100%'>
      <Box w='100%' mb={{ base: '32px', md: '64px', xl: '100px' }}>
        <SectionHeader sibling={<Line />} mr='16px'>
          <Flex alignItems='center' alignContent='center'>
            <SpherePulse fontSize='2em' />
            <Title mx='15px'>Quiz</Title>
          </Flex>
        </SectionHeader>
      </Box>

      <Box>
        <Flex justifyContent='center' alignItems='center'>
          <Box fontSize='2xl'>
            <Link
              _hover={{ color: secondary }}
              href='#left'
              title='Previous Question'
              aria-label='Previous Question'
              className={`left ${
                position === 0 || position > quiz.length - 1 ? 'disable' : null
              }`}
              onClick={leftClick}
              display='block'
              // padding='2em'
              padding={{ base: '0.5em', md: '1em', xl: '2em' }}
            >
              <FaChevronCircleLeft />
            </Link>
          </Box>
          <Center width='60%'>
            {position < quiz.length ? (
              <>
                <Stack>
                  <Text fontSize='small' textAlign='right'>
                    {position < quiz.length && `${position + 1}/${quiz.length}`}
                  </Text>
                  <Heading3 textAlign='center'>
                    {quiz[position].question}
                  </Heading3>

                  <Box textAlign='center'>
                    {quiz[position].answers.map(
                      ({ answer, isCorrect }, idx) => {
                        return (
                          <Button
                            mt='1.5'
                            ml='2'
                            textColor={`${light ? 'white' : 'black'}`}
                            key={idx}
                            onClick={() => handleClick(isCorrect)}
                            _hover={{ opacity: 0.9 }}
                            backgroundColor={`${
                              clicked
                                ? isCorrect
                                  ? 'green'
                                  : secondary
                                : secondary
                            }`}
                          >
                            {answer}
                          </Button>
                        )
                      }
                    )}
                  </Box>
                  <Box minH='30px' textAlign='center'>
                    {info === true &&
                      (correct ? (
                        <Flex
                          alignItems='center'
                          justifyContent='center'
                          gridGap='1.5'
                        >
                          {' '}
                          <FaCheckCircle /> Correct
                        </Flex>
                      ) : (
                        <Flex
                          alignItems='center'
                          justifyContent='center'
                          gridGap='1.5'
                        >
                          {' '}
                          <FaTimesCircle /> Wrong
                        </Flex>
                      ))}
                  </Box>
                </Stack>
              </>
            ) : (
              <Flex flexDir='column' gridGap='1.5em' px='1em'>
                <Stack textAlign='center'>
                  <Heading3>Total points: {score}</Heading3>
                  <Button roundedBottom onClick={startAgain}>
                    Start Again &nbsp; <FaSync />{' '}
                  </Button>
                </Stack>
                <Stack>
                  {weakPoint.length ? (
                    <>
                      <Body>
                        Recommended articles to improve your results 📈:
                      </Body>
                      <List spacing={2}>
                        {[...newWeakPoint].map((link, idx) => (
                          <ListItem key={idx}>
                            <ListIcon as={CBullet} />

                            <Link
                              // _hover={{
                              //   color: secondary,
                              //   textDecoration: 'none'
                              // }}
                              href={`/article/${link}`}
                              target='_blank'
                            >
                              {formateProjectName(link)}
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </>
                  ) : score == 0 ? (
                    <Center>Hmmm 😑</Center>
                  ) : (
                    <Center>You got a perfect score. 👌</Center>
                  )}
                </Stack>
              </Flex>
            )}
          </Center>
          <Box fontSize='2xl'>
            <Link
              _hover={{ color: secondary }}
              href='#right'
              title='Next Question'
              aria-label='Next Question'
              className={`right ${
                position > quiz.length - 1 ? 'disable' : null
              }`}
              onClick={rightClick}
              display='block'
              height='100%'
              padding={{ base: '0.5em', md: '1em', xl: '2em' }}
            >
              <FaChevronCircleRight />
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Quiz

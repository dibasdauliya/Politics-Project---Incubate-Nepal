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
import { Title, Bullet, Heading3, Body } from '@/components/typography'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'
import { BiBrightness } from 'react-icons/bi'
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

  const quiz = [
    {
      question: 'This is question 1 This is question 1This is question 1',
      answers: [
        {
          answer: 'hi1',
          isCorrect: false
        },
        { answer: 'hi2', isCorrect: false },
        { answer: 'hi3 (um)', isCorrect: true },
        { answer: 'hi4', isCorrect: false }
      ],
      link: 'link for ques 1'
    },
    {
      question: 'This is question 2',
      answers: [
        {
          answer: 'hi1',
          isCorrect: false
        },
        { answer: 'hi2 (um)', isCorrect: true },
        { answer: 'hi3', isCorrect: false },
        { answer: 'hi4', isCorrect: false }
      ],
      link: 'link for ques 2'
    },
    {
      question: 'This is question 3',
      answers: [
        {
          answer: 'hi1',
          isCorrect: false
        },
        { answer: 'hi2', isCorrect: false },
        { answer: 'hi3', isCorrect: false },
        { answer: 'hi4 (um)', isCorrect: true }
      ],
      link: 'link for ques 3'
    },
    {
      question: 'This is question 4',
      answers: [
        {
          answer: 'hi1 (um)',
          isCorrect: true
        },
        { answer: 'hi2', isCorrect: false },
        { answer: 'hi3', isCorrect: false },
        { answer: 'hi4', isCorrect: false }
      ],
      link: 'link for ques 4'
    }
  ]

  const { secondary, primary } = useColorSwitcher()

  const { colorMode } = useColorMode()

  const light = colorMode === 'light'

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
    }
  }

  function leftClick() {
    if (position !== 0 && position < quiz.length) setPos((pos) => pos - 1)
    setClicked(false)
  }

  function rightClick() {
    position < quiz.length && setPos((pos) => pos + 1)
    setClicked(false)
  }

  function startAgain() {
    setPos(0)
    setScore(0)
    setWeak([])
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
              padding='2em'
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
                    {quiz[position].answers.map(({ answer, isCorrect }) => {
                      return (
                        <Button
                          mt='1.5'
                          ml='2'
                          textColor={`${light ? 'white' : 'black'}`}
                          key={answer}
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
                    })}
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
              <Flex flexDir='column' gridGap='1.5em'>
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
                        {weakPoint.map((link, idx) => (
                          <ListItem key={idx}>
                            <ListIcon as={CBullet} />
                            {link}
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
              padding='2em'
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

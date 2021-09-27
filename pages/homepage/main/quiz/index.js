import {
  Box,
  Flex,
  Button,
  Center,
  useColorMode,
  Stack,
  Link,
  Text
} from '@chakra-ui/react'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faSync,
  faCheckCircle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'
import SpherePulse from '@/assets/motion/SpherePulse'
import { Line, SectionHeader } from '@/components/layout'
import { Title, Bullet, Heading3, Body } from '@/components/typography'
import useColorSwitcher from '@/utils/hooks/useColorSwitcher'
import { BiBrightness } from 'react-icons/bi'

function Quiz({ ...props }) {
  const [position, setPos] = useState(0)
  const [clicked, setClicked] = useState(false)
  const [score, setScore] = useState(0)
  const [info, showInfo] = useState(false)
  const [correct, setIsCorrect] = useState(null)

  const quiz = [
    {
      question: 'This is question 1 This is question 1This is question 1',
      answers: [
        {
          answer: 'hi1',
          isCorrect: false
        },
        { answer: 'hi2', isCorrect: false },
        { answer: 'hi3', isCorrect: true },
        { answer: 'hi4', isCorrect: false }
      ]
    },
    {
      question: 'This is question 2',
      answers: [
        {
          answer: 'hi1',
          isCorrect: false
        },
        { answer: 'hi2', isCorrect: true },
        { answer: 'hi3', isCorrect: false },
        { answer: 'hi4', isCorrect: false }
      ]
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
        { answer: 'hi4', isCorrect: true }
      ]
    },
    {
      question: 'This is question 4',
      answers: [
        {
          answer: 'hi1',
          isCorrect: true
        },
        { answer: 'hi2', isCorrect: false },
        { answer: 'hi3', isCorrect: false },
        { answer: 'hi4', isCorrect: false }
      ]
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
        <Flex justifyContent='center' alignItems='center' gridGap={3}>
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
            >
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </Link>
          </Box>
          <Center w='60%'>
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
                        <Text fontSize='md'>
                          Correct <FontAwesomeIcon icon={faCheckCircle} />{' '}
                        </Text>
                      ) : (
                        <Text fontSize='md'>
                          Wrong <FontAwesomeIcon icon={faTimesCircle} />{' '}
                        </Text>
                      ))}
                  </Box>
                </Stack>
              </>
            ) : (
              <Flex flexDir='column'>
                <Heading3>Total points: {score}</Heading3>
                <Button roundedBottom onClick={startAgain}>
                  Start Again &nbsp; <FontAwesomeIcon icon={faSync} />{' '}
                </Button>
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
            >
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Quiz

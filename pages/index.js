import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

import Container from '../components/Container'

export default function Index() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Home - Abdul-Samad Olagunju</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, I'm Abdul-Samad Olagunju</Heading>
          <Text color={colorSecondary[colorMode]}> Hey, I am a Neuroscience student at the University of Alberta. I enjoy working with Nextjs and crafting beautiful front-end experiences. I want to thank Benjamin Carlson for his personal website tutorial and Michael Hall for inspiring me to make this website. </Text>
          <br />
          <br />
          <Image
            src="/images/westbrook.gif"
            alt="Photo"
            width={900}
            height={900}
            priority
            className="next-image"
          />
          <br />
          <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
            <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
              <div className="flex flex-col space-y-4">
                <Link href="/">
                  <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
                </Link>
                <Link href="/">
                  <a className="text-gray-500 hover:text-gray-600 transition">
                    About
                  </a>
                </Link>
                <Link href="/">
                  <a className="text-gray-500 hover:text-gray-600 transition">
                    Newsletter
                  </a>
                </Link>
              </div>
              <div className="flex flex-col space-y-4">
                <ExternalLink href="https://twitter.com/leeerob">
                  Twitter
                </ExternalLink>
                <ExternalLink href="https://github.com/leerob">GitHub</ExternalLink>
                <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
                  YouTube
                </ExternalLink>
              </div>
              <div className="flex flex-col space-y-4">
                <Link href="/">
                  <a className="text-gray-500 hover:text-gray-600 transition">Uses</a>
                </Link>
                <Link href="/">
                  <a className="text-gray-500 hover:text-gray-600 transition">
                    Guestbook
                  </a>
                </Link>
                <Link href="/">
                  <a className="text-gray-500 hover:text-gray-600 transition">
                    Snippets
                  </a>
                </Link>
                <Link href="/">
                  <a className="text-gray-500 hover:text-gray-600 transition">
                    Tweets
                  </a>
                </Link>
              </div>
            </div>
          </footer>
        </Flex>
      </Stack>
    </Container>
  )
}

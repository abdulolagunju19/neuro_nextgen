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
        </Flex>
      </Stack>
    </Container>
  )
}

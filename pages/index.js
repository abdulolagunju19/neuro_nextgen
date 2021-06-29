import Head from 'next/head'
import Image from 'next/image'
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
          <Text color={colorSecondary[colorMode]}> Hey, I am Neuroscience student at the University of Alberta. I enjoy working with Nextjs and crafting beautiful front-end experiences. This portfolio is built with Nextjs. I also thank Benjamin Carlson for his personal website tutorial and Michael Hall for inspiring me to make this website. </Text>
          <br />
          <br />
          <Image
            src="/images/dancing.gif"
            alt="Photo"
            width={300}
            height={170}
            priority
            className="next-image"
            object-fit: cover;
            object-position: center;
          />
          <br />
        </Flex>
      </Stack>
    </Container>
  )
}

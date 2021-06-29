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

export default function ContactMe() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Want to connect further?</title>
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
          <Heading mb={2}>Want to connect further?</Heading>
          <Text color={colorSecondary[colorMode]}> You can reach me at this email address: abdulolagunju19@gmail.com </Text>
          <br />
          <br />
          <Image
            src="/images/happy.gif"
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


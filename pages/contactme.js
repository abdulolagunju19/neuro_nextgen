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
import { Subscribe } from '../components/Subscribe'

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
          <br />
          <Text color={colorSecondary[colorMode]}> You can reach me at this email address: olagunju@ualberta.ca </Text>
          <br />
          <Image
            src="/images/coolbrain.gif"
            alt="Photo"
            justifyContent="center"
            width={700}
            height={700}
            priority
            className="next-image"
          />
          <Subscribe/>
        </Flex>
      </Stack>
    </Container>
  )
}


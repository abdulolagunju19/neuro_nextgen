import Head from 'next/head'
import Image from 'next/image'
import "animate.css"
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  VStack,
  Box
} from '@chakra-ui/react'

import Container from '../components/Container'
import { Subscribe } from '../components/Subscribe';

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
          className="animate__animated animate__fadeInLeft"
        >
          <Heading mb={2}>Want to connect further?</Heading>
          <Subscribe/>
          <br />
          <Text color={colorSecondary[colorMode]} fontSize="xl" fontWeight="semibold"> You can also reach me at this email address: olagunju@ualberta.ca </Text>
        </Flex>
      </Stack>
      <VStack spacing="50px">
          <Text fontSize="2xl" as="ins">Click this to see a cool effect!</Text>
          <Text fontSize="3xl">&darr;</Text>
          <Box borderRadius="lg" overflow="hidden" p={5} w ="51%" h ="650">
            <iframe width="300%" height="800px" src="https://preview.p5js.org/abdulolagunju19/embed/PYvsqEjBM"></iframe>
          </Box>
      </VStack>
    </Container>
  )
}


import Head from 'next/head'
import Image from 'next/image'
import "animate.css"
import { NextSeo } from 'next-seo'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  VStack,
  Box,
  Button
} from '@chakra-ui/react'

import { useRouter } from 'next/router'
import Container from '../components/Container'
import { Subscribe } from '../components/Subscribe';

const url = 'https://abneuro.vercel.app/contactme'
const title = 'Contact Me – Abdul-Samad Olagunju'
const description = 'Contact Me if you have any Further Questions.'

export default function ContactMe() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  const router = useRouter()
  return (
    <>
      <NextSeo
          title={title}
          description={description}
          canonical={url}
          openGraph={{
            url,
            title,
            description
          }}
        />
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
          </Flex>
        </Stack>
        <VStack spacing="15px" p="4">
            <Button
            variant="solid"
            size="lg"
            fontSize="20px"
            onClick={() => router.push('mailto:olagunju@ualberta.ca')}
            >
              Get in touch!
            </Button>
            <br />
            <Text color={colorSecondary[colorMode]} fontSize="xl" fontWeight="semibold"> You can also reach me at this email address: olagunju@ualberta.ca </Text>
            <Text fontSize="2xl" as="ins">As a send off, click the picture below to see a cool effect!</Text>
            <Text fontSize="3xl">&darr;</Text>
            <Box borderRadius="lg" overflow="hidden" p={5} w ="51%" h ="650">
              <iframe width="300%" height="800px" src="https://preview.p5js.org/abdulolagunju19/embed/PYvsqEjBM"></iframe>
            </Box>
        </VStack>
      </Container>
    </>
  )
}


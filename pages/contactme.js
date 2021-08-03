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
  Box
} from '@chakra-ui/react'

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
            <Box h='full' w='full' my={5}>
            <VStack
            
              bg={colorMode === 'light' ? `white` : `gray.900`}
              px={{ base: 4, md: 8 }}
              py={4}
              height='100%'
              width='100%'
              border='1px solid'
              borderColor={colorMode === 'light' ? `gray.200` : `gray.700`}
              borderRadius='2xl'
              boxShadow='xl'
              textAlign='left'
              direction='column'
              justifyContent='flex-start'
              alignItems='flex-start'
              isTruncated
              spacing={1}
            >
              <Flex
                direction={{ base: 'column', sm: 'row' }}
                maxWidth='full'
                width='full'
                isTruncated
                justifyContent='space-between'
                alignItems='flex-start'
              >
                <Flex width='full' justifyContent='space-between'>
                  <Text fontSize={{ base: `2xl`, md: `4xl` }} fontWeight='bold' isTruncated maxW='100%'>
                  Want to Connect Further?
                  </Text>
                  <Stack isInline justifyContent='flex-end' alignItems='center' spacing={4} mr={1}>
                  </Stack>
                </Flex>
              </Flex>
              <Text
                color={colorMode === 'light' ? `gray.600` : `gray.300`}
                justifySelf='center'
                height='100%'
                width='100%'
                whiteSpace='normal'
                pt={2}
              >
                <Subscribe/>
              </Text>
              <br/>
              <Text color={colorSecondary[colorMode]} fontSize="xl" fontWeight="semibold"> You can also reach me at this email address: olagunju@ualberta.ca </Text>
              <br/>
            </VStack>
            </Box>
          </Flex>
        </Stack>
        <VStack spacing="15px">
            <Text fontSize="2xl">Thanks for visiting my website.</Text>
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


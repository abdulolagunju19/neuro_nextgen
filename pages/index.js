import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import "animate.css"
import Particles from 'react-particles-js';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

import Container from '../components/Container'
import { NextSeo } from 'next-seo'
import Typewriter from 'typewriter-effect';

const url = 'https://abneuro.vercel.app/'
const title = 'Home Page – Abdul-Samad Olagunju'
const description = 'The Personal Website of Abdul-Samad Olagunju.'

export default function Index() {
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
          style={{ position: 'relative', overflow: "hidden" }}
        >
          <div style={{ position: 'absolute'}}>
            <Particles
                  params={{
                    particles: {
                      color: {
                        value: "#000000"
                      },
                      size: {
                        value: 30,
                        "anim": {
                          "speed": 0.2,
                        }
                      },
                      number: {
                        "value": 3,
                        "density": {
                            "enable": false
                        }
                    },
                    "modes": {
                      "bubble": {
                          "distance": 250,
                          "duration": 2,
                          "size": 0,
                          "opacity": 1
                      },
                      "repulse": {
                          "distance": 400,
                          "duration": 4
                      }
                    }
                    }
                  }}
                />
          </div>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            className="animate__animated animate__fadeInLeft"
          >
            <Heading mb={2}>Hi, I'm Abdul-Samad Olagunju</Heading>
            <br />
            <Flex direction='row'>
              <Text fontSize={['lg', '2xl']}>I am&nbsp;</Text>
              <Text
                as='span'
                fontSize={['lg', '2xl']}
                variant='primary'
                fontWeight='semibold'
                _hover={{ fontWeight: 'bold' }}
              >
                <Typewriter
                  options={{
                    delay: 50,
                    skipAddStyles: true,
                    loop: true,
                    deleteSpeed: 20,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2000)
                      .typeString('learning about data science.')
                      .pauseFor(2000)
                      .deleteChars(28)
                      .typeString('interested in machine learning.')
                      .pauseFor(2000)
                      .deleteChars(31)
                      .typeString('learning Next.js and React.')
                      .pauseFor(2000)
                      .deleteChars(31)
                      .start();
                  }}
                />
              </Text>
            </Flex>
            <br />
            <Text color={colorSecondary[colorMode]}> I'm a Neuroscience student at the University of Alberta. This is my personal website, where I write about statistics, neuroscience, and display my projects. I created this website because I believe that complicated ideas should be understandable to the general public. I want to share everything that I have learned, and I hope that it helps you. </Text>
            <br />
            <Text color={colorSecondary[colorMode]}> I want to thank Benjamin Carlson for his personal website tutorial, it helped me get my feet off the ground in web development. </Text>
            <br />
            <div>
              <Image
                src="/images/westbrook.gif"
                alt="Photo"
                width={900}
                height={900}
                priority
                className="next-image"
              />
            </div>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}

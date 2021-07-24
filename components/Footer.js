import React from 'react'
import NextLink from 'next/link'
import { Flex, Link, IconButton, useColorMode } from '@chakra-ui/react'
import { Divider, Box, Button } from "@chakra-ui/react"


export const Footer = () => {

    const { colorMode } = useColorMode()
    const borderIcon = {
        light: 'gray.400',
        dark: 'gray.500'
    }
    const footerHoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    }
    return (
        <Flex align="center" mb={4} direction="column" visibility={'hidden', 'visible', 'visible'} display={['none', 'flex', 'flex']}>
            <Divider mb={5} mt={3} w='50%' alignSelf="center" />
            <div>
                <Stack spacing={4} direction="row" align="center">
                    <NextLink href="/blog" passHref>
                        <Button>
                            <Link
                                fontSize="md"
                                color="gray.500"
                                minWidth="100px"
                                mr={2}
                                title="Blog"
                            >
                               My Blog 
                            </Link>
                        </Button>
                    </NextLink>
                    <NextLink href="/simplestats" passHref>
                        <Button>
                            <Link
                                fontSize="md"
                                color="gray.500"
                                minWidth="100px"
                                mr={2}
                                title="Simplistic Statistics"
                            >
                                 Tutorials
                            </Link>
                        </Button>
                    </NextLink>
                    <NextLink href="/contactme" passHref>
                        <Button>
                            <Link
                                fontSize="md"
                                color="gray.500"
                                minWidth="100px"
                                mr={2}
                                title="Contact Me"
                            >
                                Contact Me
                            </Link>
                        </Button>
                    </NextLink>
                </Stack>
            </div>
        </Flex>
    )
}

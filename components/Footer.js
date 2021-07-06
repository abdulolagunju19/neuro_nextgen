import React from 'react'
import NextLink from 'next/link'
import { Flex, Link, IconButton, useColorMode } from '@chakra-ui/react'


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
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
            <div>
                <NextLink href="/blog" passHref>
                    <Link
                        fontSize="md"
                        color="gray.500"
                        minWidth="100px"
                        mr={2}
                        title="Blog"
                    >
                       My Blog_ 
                    </Link>
                </NextLink>
                <NextLink href="/simplestats" passHref>
                    <Link
                        fontSize="md"
                        color="gray.500"
                        minWidth="100px"
                        mr={2}
                        title="Simplistic Statistics"
                    >
                         |Tutorials_
                    </Link>
                </NextLink>
                <NextLink href="/contactme" passHref>
                    <Link
                        fontSize="md"
                        color="gray.500"
                        minWidth="100px"
                        mr={2}
                        title="Contact Me"
                    >
                        |Contact Me
                    </Link>
                </NextLink>
            </div>
        </Flex>
    )
}

import Link from 'next/link';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer>
      <hr/>
      <div>
        <div
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={2}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>
              About
            </a>
          </Link>
          <Link href="/">
            <a>
              Newsletter
            </a>
          </Link>
          <ExternalLink href="https://twitter.com">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/abdulolagunju19">GitHub</ExternalLink>
        </div>
      </div>
    </footer>
  );
}

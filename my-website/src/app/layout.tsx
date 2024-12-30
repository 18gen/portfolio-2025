import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { ChakraProvider, Flex, Box, Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Gen's Portfolio",
  description: 'My personal portfolio built with React, TypeScript, and Chakra UI',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ChakraProvider>
          <Flex as="nav" bg="gray.100" p={4} gap={4}>
            <ChakraLink as={NextLink} href="/">
              Home
            </ChakraLink>
            <ChakraLink as={NextLink} href="/work">
              Work
            </ChakraLink>
            <ChakraLink as={NextLink} href="/projects">
              Projects
            </ChakraLink>
            <ChakraLink as={NextLink} href="/journey">
              Journey
            </ChakraLink>
            <ChakraLink as={NextLink} href="/contact">
              Contact
            </ChakraLink>
          </Flex>

          <Box as="main" p={8}>
            {children}
          </Box>
        </ChakraProvider>
      </body>
    </html>
  )
}

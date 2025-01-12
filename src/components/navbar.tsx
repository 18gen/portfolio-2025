"use client"

import {
  Flex,
  Box,
  Heading,
  Stack,
  IconButton,
  Container,
  Link
} from "@chakra-ui/react"
import { ColorModeButton } from "../components/ui/color-mode"
import { Button } from "../components/ui/button"
import NextLink from "next/link"
import Logo from "./logo"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"
import { IoIosMenu } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {

  const buttonHoverStyles = {
    position: "relative",
    _after: {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      height: "2px",
      width: 0,
      bg: "blue.800",
      transition: "width 0.3s ease-in-out",
    },
    _hover: {
      _after: {
        width: "100%",
      },
    },
  };

  return (
    <Box
      position="fixed"
      as="nav"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      w="100%"
      py={2}
    >
      <Container display={"flex"} maxW={"3xl"} alignItems={"center"} justifyContent={"space-between"}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>

          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            flexGrow={1}
            justify="center"
            align="center"
          >
            <NextLink href="/works" passHref>
              <Button variant="ghost" {...buttonHoverStyles}>
                Works
              </Button>
            </NextLink>
            <NextLink href="/projects" passHref>
              <Button variant="ghost" {...buttonHoverStyles}>
                Projects
              </Button>
            </NextLink>
            <NextLink href="/journey" passHref>
              <Button variant="ghost" {...buttonHoverStyles}>
                Journey
              </Button>
            </NextLink>
            <Link href="https://github.com/18gen">
              <Button size={"md"} colorPalette="gray" variant="ghost">{<FaGithub/>} Github</Button>
            </Link>
          </Stack>

          <Box display={"flex"}>
            <ColorModeButton />
            <MenuRoot closeOnSelect={true}>
              <MenuTrigger
                asChild
                display={{ base: "flex", md: "none" }}
                ml={2}
              >
                <IconButton
                  variant="outline"
                  aria-label="Open Menu"
                  size="md"
                >
                  <IoIosMenu />
                </IconButton>
              </MenuTrigger>
              <MenuContent>
                <NextLink href="/"><MenuItem value="/">Home</MenuItem></NextLink>
                <NextLink href="/works"><MenuItem value="/works">Works</MenuItem></NextLink>
                <NextLink href="/projects"><MenuItem value="/projects">Projects</MenuItem></NextLink>
                <NextLink href="/journey"><MenuItem value="/journey">Journey</MenuItem></NextLink>
              </MenuContent>
            </MenuRoot>
          </Box>
      </Container>
    </Box>
  );
}

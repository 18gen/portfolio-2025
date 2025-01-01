"use client"

import {
  Flex,
  Box,
  Heading,
  Stack,
  IconButton,
  Container
} from "@chakra-ui/react"
import Link from "next/link"
import { ColorModeButton } from "../components/ui/color-mode"
import { Button } from "../components/ui/button"
import Logo from "./logo"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"
import { IoIosMenu } from "react-icons/io";

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
      py={1.5}
    >
      <Container display={"flex"} maxW={"2xl"} alignItems={"center"} justifyContent={"space-between"}>
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
            <Link href="/works" passHref>
              <Button as="a" variant="ghost" {...buttonHoverStyles}>
                Works
              </Button>
            </Link>
            <Link href="/projects" passHref>
              <Button as="a" variant="ghost" {...buttonHoverStyles}>
                Projects
              </Button>
            </Link>
            <Link href="/journey" passHref>
              <Button as="a" variant="ghost" {...buttonHoverStyles}>
                Journey
              </Button>
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
                <Link href="/"><MenuItem value="/">Home</MenuItem></Link>
                <Link href="/works"><MenuItem value="/works">Works</MenuItem></Link>
                <Link href="/projects"><MenuItem value="/projects">Projects</MenuItem></Link>
                <Link href="/journey"><MenuItem value="/journey">Journey</MenuItem></Link>
              </MenuContent>
            </MenuRoot>
          </Box>
      </Container>
    </Box>
  );
}

"use client";

import {
  Box,
  Heading,
  Stack,
  IconButton,
  Container,
  Link,
} from "@chakra-ui/react";
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";
import { Button } from "@/components/ui/button";
import NextLink from "next/link";
import Logo from "./logo";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { IoIosMenu } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  const selectedBg = useColorModeValue("#1B202B", "white");
  const selectedColor = useColorModeValue("white", "black");

  return (
    <Box
      position="fixed"
      as="nav"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      w="100%"
      py={2}
    >
      <Container
        display={"flex"}
        maxW={"3xl"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Heading as="h1" size="lg" letterSpacing="tighter">
          <Logo />
        </Heading>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          flexGrow={1}
          justify="center"
          align="center"
          fontWeight={"semibold"}
        >
          <NextLink href="/works">
            <Button
              variant="ghost"
              backgroundColor={path === "/works" ? selectedBg : undefined}
              color={path === "/works" ? selectedColor : undefined}
            >
              Works
            </Button>
          </NextLink>
          <NextLink href="/projects">
            <Button
              variant="ghost"
              backgroundColor={path === "/projects" ? selectedBg : undefined}
              color={path === "/projects" ? selectedColor : undefined}
            >
              Projects
            </Button>
          </NextLink>
          <NextLink href="/journey">
            <Button
              variant="ghost"
              backgroundColor={path === "/journey" ? selectedBg : undefined}
              color={path === "/journey" ? selectedColor : undefined}
            >
              Journey
            </Button>
          </NextLink>
        </Stack>

        <Box display={"flex"}>
          <Box pr={5} display={{ base: "none", md: "flex" }} alignItems="center">
            <Link href="https://github.com/18gen">
              <FaGithub /> GitHub
            </Link>
          </Box>
          <ColorModeButton />
          <MenuRoot closeOnSelect={true}>
            <MenuTrigger asChild display={{ base: "flex", md: "none" }} ml={2}>
              <IconButton variant="outline" aria-label="Open Menu" size="md">
                <IoIosMenu />
              </IconButton>
            </MenuTrigger>
            <MenuContent>
              <NextLink href="/">
                <MenuItem value="/">Home</MenuItem>
              </NextLink>
              <NextLink href="/works">
                <MenuItem value="/works">Works</MenuItem>
              </NextLink>
              <NextLink href="/projects">
                <MenuItem value="/projects">Projects</MenuItem>
              </NextLink>
              <NextLink href="/journey">
                <MenuItem value="/journey">Journey</MenuItem>
              </NextLink>
              <Link href="https://github.com/18gen">
                <FaGithub /> GitHub
              </Link>
            </MenuContent>
          </MenuRoot>
        </Box>
      </Container>
    </Box>
  );
}

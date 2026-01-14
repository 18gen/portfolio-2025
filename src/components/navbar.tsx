"use client";

import {
  Box,
  Heading,
  Stack,
  IconButton,
  Container,
  Link,
} from "@chakra-ui/react";
import { ColorModeButton } from "../components/ui/color-mode";
import { ButtonWithState } from "./ui/buttonWithState";
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
            <ButtonWithState variant={"ghost"} selected={path === "/works"}>
              Works
            </ButtonWithState>
          </NextLink>
          <NextLink href="/projects">
            <ButtonWithState variant={"ghost"} selected={path === "/projects"}>
              Projects
            </ButtonWithState>
          </NextLink>
          <NextLink href="/journey">
            <ButtonWithState variant={"ghost"} selected={path === "/journey"}>
              Journey
            </ButtonWithState>
          </NextLink>
        </Stack>

        <Box display={"flex"}>
          <Box className="pr-2" display={{ base: "none", md: "flex" }}>
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

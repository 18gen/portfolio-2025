"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useColorModeValue } from "@/components/ui/color-mode";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

import "./globals.css";
import Ongoing from "@/components/about/ongoing";
import Bio from "@/components/about/bio";
import Like from "@/components/about/like";
import Resume from "@/components/about/resume";

export default function Page() {
  const backgroundColor = useColorModeValue("whiteAlpha.800", "whiteAlpha.200");
  const headingClassName = useColorModeValue("text-shadow-lg", "");
  const textClassName = useColorModeValue("text-shadow-sm", "");

  return (
    <Container pt={8} maxW={{ base: "md", md: "2xl" }}>
      <Box>
        <Box
          borderRadius="lg"
          p={3}
          mb={5}
          textAlign="center"
          background={backgroundColor}
          width="100%"
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hey👋, I study Computer Science at{" "}
          <Text as="span" display={{ base: "inline", md: "none" }}>
            UWaterloo
          </Text>
          <Text as="span" display={{ base: "none", md: "inline" }}>
            University of Waterloo
          </Text>
        </Box>

        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={{ md: "center" }}
          justifyContent={{ md: "space-between" }}
        >
          <Box>
            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              lineHeight="short"
              className={headingClassName}
            >
              Gen Ichihashi
            </Heading>
            <Text className={textClassName}>
              Full-Stack Developer based in Canada/Japan
            </Text>
          </Box>
          <Box mt={{ base: 4, md: 0 }} textAlign="center">
            <Avatar
              outlineWidth="2px"
              outlineColor="white"
              outlineStyle="solid"
              w="100px"
              h="100px"
              name="Gen"
              src="me2.jpg"
            />
          </Box>
        </Flex>
      </Box>
      <Heading
        py={2}
        fontSize={{ base: "lg", md: "1xl" }}
        textDecoration="underline"
        textDecorationThickness="4px"
        textUnderlineOffset="4px"
        textDecorationColor="gray"
      >
        Ongoing
      </Heading>
      <Ongoing />

      <Box data-state="open" mt={{ base: "10px", md: "15px" }}>
        <Heading
          py={2}
          fontSize={{ base: "lg", md: "1xl" }}
          textDecoration="underline"
          textDecorationThickness="4px"
          textUnderlineOffset="3px"
          textDecorationColor="gray"
        >
          Bio
        </Heading>
        <Bio />

        <Heading
          py={2}
          fontSize={{ base: "lg", md: "1xl" }}
          textDecoration="underline"
          textDecorationThickness="4px"
          textUnderlineOffset="3px"
          textDecorationColor="gray"
        >
          I♥
        </Heading>
        <Like />

        <Heading
          py={2}
          fontSize={{ base: "lg", md: "1xl" }}
          textDecoration="underline"
          textDecorationThickness="4px"
          textUnderlineOffset="3px"
          textDecorationColor="gray"
        >
          Contact
        </Heading>
        <VStack alignItems="flex-start" gap="1">
          <Link href="https://www.linkedin.com/in/gen-ichihashi">
            <Button size={"md"} colorPalette="cyan" variant="ghost">
              {<FaLinkedin />} @Gen_Ichihashi
            </Button>
          </Link>
          <Link href="https://www.facebook.com/ichihashigen">
            <Button size={"md"} colorPalette="cyan" variant="ghost">
              {<FaFacebookSquare />} @Ichihashi_Gen
            </Button>
          </Link>
          <Link href="https://www.instagram.com/ichigen3215">
            <Button size={"md"} colorPalette="cyan" variant="ghost">
              {<FaInstagram />} @ichigen3215
            </Button>
          </Link>
          <Text>gmail: ichihashigen@gmail.com</Text>
        </VStack>

        <Heading
          py={2}
          fontSize={{ base: "lg", md: "1xl" }}
          textDecoration="underline"
          textDecorationThickness="4px"
          textUnderlineOffset="3px"
          textDecorationColor="gray"
        >
          Resume
        </Heading>
        <Resume />
      </Box>
    </Container>
  );
}

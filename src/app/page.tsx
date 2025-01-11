'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  HStack,
  VStack,
  Card,
  Badge,
  Strong
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { useColorModeValue } from "@/components/ui/color-mode"
import { Table } from "@chakra-ui/react"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Tooltip } from "@/components/ui/tooltip"
import './globals.css';

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
          css={{ backdropFilter: 'blur(10px)' }}
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
          alignItems={{ md:"center" }}
          justifyContent={{ md:"space-between"}}
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
          <Text className={textClassName}>Full-Stack Developer based in Japan</Text>
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
      <HStack gap="3">
        <Card.Root
          width="260px"
          height="200px"
          size="md"
          variant="subtle">
          <Card.Body>
            <HStack mb="3" gap="3">
              <Avatar
                src="ongoing/uw.svg.png"
                name="University of Waterloo"
              />
              <Heading fontWeight={"md"}>
                  3B Study Term
              </Heading>
            </HStack>
            <Card.Description>
              Bachelor’s of Computer Science, Honours with AI specialization
            </Card.Description>
          </Card.Body>
          <Card.Footer>
            <Text fontSize={"sm"}>
              seeking{" "}
              <Link
                variant="underline"
                href="/works"
                colorPalette="cyan"
                fontWeight={"bold"}
              >
                Summer Internship
              </Link>
            </Text>
          </Card.Footer>
        </Card.Root>
        <Card.Root
          width="260px"
          height="200px"
          size="md"
          variant="subtle">
          <Card.Body>
            <HStack mb="3" gap="3">
              <Avatar
                src="works/geesehacks.jpg"
                name="Geesehacks"
              />
              <Heading fontWeight={"md"}>
                  GeeseHacks
              </Heading>
            </HStack>
            <Card.Description>
             <Strong color="fg">Director of 300+ Hackathon</Strong> at UW, secured 22k funding and 600+ applied so far
            </Card.Description>
          </Card.Body>
          <Card.Footer>
            <Text fontSize={"sm"}>
              check out our{" "}
              <Link
                variant="underline"
                href="https://geesehacks.com"
                colorPalette="cyan"
                fontWeight={"bold"}
                isExternal
              >
                website
              </Link>
            </Text>
          </Card.Footer>
        </Card.Root>
      </HStack>
      

      <Box
        data-state="open"
        mt={{base: "10px", md: "15px"}}>
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
        <Table.Root size="sm" striped>
          <Table.Body>
            <Table.Row>
              <Table.Cell fontWeight={"bold"}>2003</Table.Cell>
              <Table.Cell>Born in Aichi(愛知) & Raised in Gifu(岐阜), Japan</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell fontWeight={"bold"}>2019</Table.Cell>
              <Table.Cell>Graduted from Honjo Juninor High School (Gifu, Japan)</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell fontWeight={"bold"}>2022</Table.Cell>
              <Table.Cell>Graduted from Sequam Secondary School (Delta, BC, Canada)</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell fontWeight={"bold"}>2026</Table.Cell>
              <Table.Cell>Expecting to graduate University of Waterloo (Waterloo, ON, Canada)</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell fontWeight={"bold"}>...after</Table.Cell>
              <Table.Cell>Applying to medical school, to become a doctor in Japan</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>

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
        <Text fontWeight={"md"}> Soccer,{" "}
          <Tooltip showArrow content="🎧 Check out my Spotify playlist 🎧">
            <Link
            variant="underline"
            href="https://open.spotify.com/user/31z7l5ijs2mdlx3ozkhkqajeu7gq?si=7982a1f0336b4fc7"
            colorPalette="red"
            fontWeight={"bold"}
            >Music</Link>
          </Tooltip>,{" "}
          <Tooltip showArrow content="👓 Check out my work 👓">
            <Link
            variant="underline"
            href="https://sketchfab.com/18gen"
            colorPalette="red"
            fontWeight={"bold"}
            >3D modeling</Link>
          </Tooltip>
        </Text>
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
          <Button size={"md"} colorPalette="cyan" variant="ghost">{<FaInstagram/>} @ichigen3215</Button>
          <Button size={"md"} colorPalette="cyan" variant="ghost">{<FaFacebookSquare/>} @Ichihashi_Gen</Button>
          <Button size={"md"} colorPalette="cyan" variant="ghost">{<FaLinkedin/>} @Gen_Ichihashi</Button>
          <Text>gmail: ichihashigen@gmail.com</Text>
        </VStack>
      </Box>
      <Box p={"40px"}></Box>
    </Container>
  );
}

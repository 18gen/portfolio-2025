"use client"

import React, { useRef } from "react";
import {
  Flex,
  Box,
  Container,
  Heading,
  Stack,
  List,
  Badge,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";

import { useColorModeValue } from "@/components/ui/color-mode";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import { Avatar } from "@/components/ui/avatar";
import { LuCheck, LuPackage, LuShip } from "react-icons/lu";


export default function Page() {
  // Refs for handling darkening of the resume preview on hover
  const imageENRef = useRef<HTMLImageElement>(null);
  const imageJPRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = (ref: React.RefObject<HTMLImageElement>) => {
    if (ref.current) {
      ref.current.style.filter = "brightness(60%)";
    }
  };

  const handleMouseLeave = (ref: React.RefObject<HTMLImageElement>) => {
    if (ref.current) {
      ref.current.style.filter = "brightness(100%)";
    }
  };

  return (
    <Container pt={14} maxW={{ base: "md", md: "xl" }}>
      {/* Experiences Section */}
      <Heading fontSize="2xl" mb="4">
        Experiences
      </Heading>

      <TimelineRoot size="xl">
        <TimelineItem>
          <TimelineConnector>
            <Avatar
              outlineWidth="1px"
              outlineColor="white"
              outlineStyle="solid"
              name="mics"
              src="works/mics.jpg"
            />
          </TimelineConnector>
          <TimelineContent>
            <TimelineTitle fontSize="lg">
              Software Developer Intern
            </TimelineTitle>
            <TimelineDescription fontSize="sm">
              Medical Informatics Co., Ltd.
            </TimelineDescription>
            <Stack direction="row" mt={1} mb={2}>
              <Badge variant={{ _dark: "outline", _light: "solid" }}>
                May 2024 - Present
              </Badge>
              <Badge
                colorPalette="blue"
                variant={{ _dark: "outline", _light: "solid" }}
              >
                Next.js
              </Badge>
              <Badge
                colorPalette="red"
                variant={{ _dark: "outline", _light: "solid" }}
              >
                Ruby on Rails
              </Badge>
              <Badge
                colorPalette="purple"
                variant={{ _dark: "outline", _light: "solid" }}
              >
                Rest API
              </Badge>
            </Stack>
            <List.Root>
              <List.Item>
                Built an electronic medical record system for 100+ home health
                care clinics (30,000+ patients) in Japan
              </List.Item>
              <List.Item>
                Refactored and optimized AI-based documentation functions,
                reducing operational costs by 97%
              </List.Item>
              <List.Item>
                Designed a statistical tool with charts, data tables, and CSV
                downloads extracted from medical records to analyze clinic
                management indicators
              </List.Item>
            </List.Root>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector>
            <Avatar
              outlineWidth="1px"
              outlineColor="white"
              outlineStyle="solid"
              name="geesehacks"
              src="works/geesehacks.jpg"
            />
          </TimelineConnector>
          <TimelineContent>
            <TimelineTitle fontSize="lg">
              Founder/Director of Hackathon Organization
            </TimelineTitle>
            <TimelineDescription fontSize="sm">GeeseHacks</TimelineDescription>
            <Stack direction="row" mt={1} mb={2}>
              <Badge variant={{ _dark: "outline", _light: "solid" }}>
                January 2024 - Present
              </Badge>
              <Badge
                colorPalette="green"
                variant={{ _dark: "outline", _light: "solid" }}
              >
                Management
              </Badge>
            </Stack>
            <List.Root>
              <List.Item>
                Leading a team of 40 members in organizing a 300-participant
                hackathon on Jan. 25-26, 2025
              </List.Item>
              <List.Item>
                Scured $17k from industry giants such as Google, SunLife, and
                CS-CAN
              </List.Item>
            </List.Root>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector>
            <Avatar
              outlineWidth="1px"
              outlineColor="white"
              outlineStyle="solid"
              name="kagayaki"
              src="works/kagayaki.jpg"
            />
          </TimelineConnector>
          <TimelineContent>
            <TimelineTitle fontSize="lg">System Management Intern</TimelineTitle>
            <TimelineDescription fontSize="sm">
              Medical Corporation Kagayaki
            </TimelineDescription>
            <Stack direction="row" mt={1} mb={2}>
              <Badge variant={{ _dark: "outline", _light: "solid" }}>
                July - August 2022
              </Badge>
              <Badge
                colorPalette="red"
                variant={{ _dark: "outline", _light: "solid" }}
              >
                JavaScript
              </Badge>
            </Stack>
            <List.Root>
              <List.Item>
                Developed and implemented QR code tracking system for blood
                containers used in transfusions
              </List.Item>
              <List.Item>
                Streamlined the process with a flowchart, enabling the first
                home blood transfusions in province
              </List.Item>
              <List.Item>
                The system is now implemented in several clinics, and over 100
                patients have received blood transfusions at home
              </List.Item>
            </List.Root>
          </TimelineContent>
        </TimelineItem>
      </TimelineRoot>

      {/* Resume Section */}
      <Heading fontSize="2xl" mb="4">
        Resume
      </Heading>
      <Flex gap={2} direction={{ base: "column", md: "row" }}>
        <Box mb="6">
          <Text fontWeight="semibold" mb="2">
            English
          </Text>
          <Box>
            <Image
              ref={imageENRef}
              src={"works/Resume2024_ENG.jpg"}
              alt="Resume Preview English"
              mb="2"
              borderRadius="md"
            />
            <Link
              onMouseEnter={() => handleMouseEnter(imageENRef)}
              onMouseLeave={() => handleMouseLeave(imageENRef)}
              href="https://drive.google.com/file/d/1srngRaqkvFnD71EGfBTnZoftVcfv3kDI/view?usp=sharing"
              color="blue.400"
              textDecoration="underline"
              fontWeight="medium"
            >
              Open PDF
            </Link>
          </Box>
        </Box>

        <Box mb="6">
          <Text fontWeight="semibold" mb="2">
            Japanese
          </Text>
          <Box>
            <Image
              ref={imageJPRef}
              src={"works/Resume2024_ENG.jpg"}
              alt="Resume Preview Japanese"
              mb="2"
              borderRadius="md"
            />
            <Link
              onMouseEnter={() => handleMouseEnter(imageJPRef)}
              onMouseLeave={() => handleMouseLeave(imageJPRef)}
              href="https://drive.google.com/drive/folders/1_gwuFC16BVosXXKsgmacPWfzTrud__4_?usp=sharing"
              isExternal
              color="blue.400"
              textDecoration="underline"
              fontWeight="medium"
            >
              Open PDF
            </Link>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

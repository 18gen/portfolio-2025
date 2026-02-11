"use client";

import React from "react";
import {
  Container,
  Heading,
  Stack,
  List,
  Badge,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import { Avatar } from "@/components/ui/avatar";
import { useColorModeValue } from "@/components/ui/color-mode";
import Resume from "@/components/about/resume";
import { works } from "@/data/works";

export default function Page() {
  const backgroundColor = useColorModeValue("whiteAlpha.800", "whiteAlpha.200");

  return (
    <Container pt={8} maxW={{ base: "md", md: "2xl" }}>
      <Box
        borderRadius="lg"
        p={3}
        mb={5}
        textAlign="center"
        background={backgroundColor}
        width="100%"
        css={{ backdropFilter: "blur(10px)" }}
      >
        I&apos;m seeking for{" "}
        <Text as="span" colorPalette="cyan.500" fontWeight="semibold">
          2025 Summer Internship
        </Text>
        {"... 🚀"}
      </Box>
      <Heading fontSize="2xl" mb="4">
        Experiences
      </Heading>

      <TimelineRoot size="xl">
        {works.map((work) => (
          <TimelineItem key={work.id}>
            <TimelineConnector>
              <Avatar
                outlineWidth="1px"
                outlineColor="white"
                outlineStyle="solid"
                name={work.id}
                src={work.image}
              />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle fontSize="lg">{work.title}</TimelineTitle>
              <Link href={work.companyUrl}>
                <TimelineDescription
                  fontSize="sm"
                  whiteSpace={"nowrap"}
                  textOverflow="ellipsis"
                >
                  {work.company}
                </TimelineDescription>
              </Link>
              <Stack direction="row" mt={1} mb={2}>
                <Badge variant={{ _dark: "outline", _light: "solid" }}>
                  {work.dateRange}
                </Badge>
                {work.technologies.map((tech) => (
                  <Badge
                    key={tech.name}
                    colorPalette={tech.colorPalette}
                    variant={{ _dark: "outline", _light: "solid" }}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </Stack>
              <List.Root>
                {work.responsibilities.map((item, i) => (
                  <List.Item key={i}>{item}</List.Item>
                ))}
              </List.Root>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineRoot>

      <Heading fontSize="2xl" mb="4">
        Resume
      </Heading>
      <Resume />
    </Container>
  );
}

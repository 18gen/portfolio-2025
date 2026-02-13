"use client";

import React from "react";
import {
  Container,
  Heading,
  Stack,
  List,
  Badge,
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
import Resume from "@/components/about/resume";
import PageBanner from "@/components/page-banner";
import { works } from "@/data/works";

export default function Page() {
  return (
    <Container pt={8} maxW={{ base: "md", md: "2xl" }}>
      <PageBanner>
        I&apos;m seeking for{" "}
        <Text as="span" colorPalette="cyan" fontWeight="semibold">
          2025 Summer Internship
        </Text>
        {"... 🚀"}
      </PageBanner>
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
                name={work.company}
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
              <Stack direction="row" mt={1} mb={2} flexWrap="wrap" gap={1}>
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

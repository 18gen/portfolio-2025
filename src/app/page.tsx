"use client";

import dynamic from "next/dynamic";
import IslandLoader from "@/components/three/island-loader";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { useColorModeValue } from "@/components/ui/color-mode";
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import Ongoing from "@/components/about/ongoing";
import { profile } from "@/data/profile";
import Bio from "@/components/about/bio";
import Like from "@/components/about/like";
import Resume from "@/components/about/resume";
import PageBanner from "@/components/page-banner";
import SectionHeading from "@/components/section-heading";

const LazyIsland = dynamic(() => import("@/components/three/island"), {
  ssr: false,
  loading: () => <IslandLoader />,
});

export default function Page() {
  const headingClassName = useColorModeValue("text-shadow-lg", "");
  const textClassName = useColorModeValue("text-shadow-sm", "");

  return (
    <>
      <LazyIsland />
      <Container pt={8} maxW={{ base: "md", md: "2xl" }} className="page-fade-in">
        <Box>
        <PageBanner>
          Hey👋, I study Computer Science at{" "}
          <Text as="span" display={{ base: "inline", md: "none" }}>
            UWaterloo
          </Text>
          <Text as="span" display={{ base: "none", md: "inline" }}>
            University of Waterloo
          </Text>
        </PageBanner>

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
              {profile.name}
            </Heading>
            <Text className={textClassName}>
              {profile.tagline}
            </Text>
          </Box>
          <Box mt={{ base: 4, md: 0 }} textAlign="center">
            <Avatar
              outlineWidth="2px"
              outlineColor="white"
              outlineStyle="solid"
              w="100px"
              h="100px"
              name={profile.name}
              src={profile.avatar}
            />
          </Box>
        </Flex>
      </Box>

      <SectionHeading>Ongoing</SectionHeading>
      <Ongoing />

      <Box data-state="open" mt={{ base: "10px", md: "15px" }}>
        <SectionHeading>Bio</SectionHeading>
        <Bio />

        <SectionHeading>I♥</SectionHeading>
        <Like />

        <SectionHeading>Contact</SectionHeading>
        <HStack gap={3}>
          {profile.contacts.map((contact) => {
            const icons: Record<string, React.ReactNode> = {
              linkedin: <FaLinkedin />,
              facebook: <FaFacebookSquare />,
              instagram: <FaInstagram />,
              email: <FaEnvelope />,
            };
            return (
              <Link
                key={contact.platform}
                href={contact.url}
                aria-label={contact.platform}
              >
                <IconButton
                  aria-label={contact.platform}
                  variant="ghost"
                  colorPalette="cyan"
                  size="md"
                >
                  {icons[contact.platform]}
                </IconButton>
              </Link>
            );
          })}
        </HStack>

        <SectionHeading>Resume</SectionHeading>
        <Resume />
      </Box>
      </Container>
    </>
  );
}

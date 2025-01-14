"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Badge,
  Grid,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Card } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
type GitHubRepo = {
  name: string;
  html_url: string;
  description: string;
  updated_at: string;
};

export default function Page() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const backgroundColor = useColorModeValue("whiteAlpha.800", "whiteAlpha.200");

  useEffect(() => {
    // Fetch public repositories from your GitHub account
    fetch("https://api.github.com/users/18gen/repos")
      .then((response) => response.json())
      .then((data) => {
        const sortedRepos = data
          .sort(
            (a: GitHubRepo, b: GitHubRepo) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime(),
          )
          .slice(0, 5); // Get the latest 5 repos
        setRepos(sortedRepos);
      })
      .catch((error) => console.error("Error fetching GitHub data:", error));
  }, []);

  return (
    <Container pt={14} maxW={{ base: "md", md: "3xl" }}>
      <Box
        borderRadius="lg"
        p={3}
        mb={5}
        textAlign="center"
        background={backgroundColor}
        width="100%"
        css={{ backdropFilter: "blur(10px)" }}
      >
        Check out my{" "}
        <Link
          variant="underline"
          colorPalette="cyan"
          fontWeight="bold"
          href="https://devpost.com/18gen?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
        >
          {" "}
          DevPost
        </Link>
        {" or "}
        <Link
          variant="underline"
          colorPalette="cyan"
          fontWeight="bold"
          href="https://protopedia.net/prototyper/ichigen3215"
        >
          Protopedia
        </Link>
        {"... 🤖"}
      </Box>

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
        <Card.Root variant="subtle" overflow="hidden">
          <video
            width="100%"
            height="auto"
            style={{ objectFit: "cover" }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="projects/memoryLane.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Card.Body gap="2">
            <Card.Title>Y+Our Memory Lane</Card.Title>
            <Stack direction="row">
              <Badge
                colorPalette="blue"
                variant={{ _dark: "outline", _light: "solid" }}
              >
                HTML/CSS
              </Badge>
              <Badge
                colorPalette="red"
                variant={{ _dark: "outline", _light: "solid" }}
              >
                django
              </Badge>
              <Badge
                colorPalette="green"
                variant={{ _dark: "outline", _light: "solid" }}
              >
                googleMap/Cohere API
              </Badge>
            </Stack>
            <Card.Description>
              Crafted during UofTHack11 with a theme of Nostalgia, Y+Our Memory
              Lane uses Google Map API to showcase past and present street views
              from the exact same perspective. With Cohere API, it adds stories
              about each location&apos;s landmarks and history, enhancing the
              nostalgic journey. Users can also contribute personal snapshots
              and tales, merging &apos;your and our&apos; memory lanes into a
              shared narrative.
            </Card.Description>
            <Link href="https://github.com/18gen/UofTHacks2024">
              <FaGithub /> Source Code
            </Link>
          </Card.Body>
        </Card.Root>
        <Card.Root variant="subtle" overflow="hidden">
          <video
            width="100%"
            height="auto"
            style={{ objectFit: "cover" }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="projects/receiptGenerator.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <Card.Body gap="2">
            <Card.Title>Sustainable Chef</Card.Title>
            <Stack direction="row">
              <Badge
                colorPalette="blue"
                variant={{ _dark: "outline", _light: "solid" }}
              >
                HTML/CSS
              </Badge>
              <Badge
                colorPalette="red"
                variant={{ _dark: "outline", _light: "solid" }}
              >
                Flask
              </Badge>
              <Badge
                colorPalette="green"
                variant={{ _dark: "outline", _light: "solid" }}
              >
                OpenAI/DALL-E API
              </Badge>
            </Stack>
            <Card.Description>
              Cooking assistant website that helps reduce food waste by tracking
              the expiration dates of items and suggesting recipes using those
              ingredients. Integrating ChatGPT API for cooking instructions and
              DALL-E 3 for visualizing the finished dish, it transforms leftover
              management into a creative and sustainable culinary experience.
            </Card.Description>
            <Link href="https://github.com/18gen/receipt-generator">
              <FaGithub /> Source Code
            </Link>
          </Card.Body>
        </Card.Root>
        <Card.Root variant="subtle" overflow="hidden">
          <video
            width="100%"
            height="auto"
            style={{ objectFit: "cover" }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="projects/chessGame.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Card.Body gap="2">
            <Card.Title>Chess Game</Card.Title>
            <Stack direction="row">
              <Badge
                colorPalette="blue"
                variant={{ _dark: "outline", _light: "solid" }}
              >
                XQuartz
              </Badge>
              <Badge
                colorPalette="red"
                variant={{ _dark: "outline", _light: "solid" }}
              >
                C++
              </Badge>
            </Stack>
            <Card.Description>
              The chess game, built exclusively with C++ for CS246 group
              project, features AI players(levels 1 to 4) and includes graphics
              using XQuartz. *The source code is not shareable due to academic
              policies
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Grid>

      <Heading size="lg" mt={4}>
        My GitHub Library
      </Heading>
      <Text mb={4}>
        Check out my other projects and updates on{" "}
        <Link
          href="https://github.com/18gen"
          variant="underline"
          fontWeight="bold"
          colorPalette="cyan"
        >
          <FaGithub /> GitHub
        </Link>
      </Text>
      {/* https://github.com/arifszn/gitprofile?tab=readme-ov-file */}
      <Grid
        templateColumns="1fr"
        gap={6}
        overflowX="auto"
        display="flex"
        flexWrap="nowrap"
        pb={4}
      >
        {repos.length > 0 ? (
          repos.map((repo) => (
            <Box
              key={repo.name}
              p={4}
              minW="300px"
              borderWidth="1px"
              borderRadius="lg"
              background={backgroundColor}
            >
              <Heading size="md" mb={2}>
                <Link href={repo.html_url}>{repo.name}</Link>
              </Heading>
              <Text fontSize="sm" mb={2}>
                {repo.description || "No description available"}
              </Text>
              <Text fontSize="xs" color="gray.500">
                Last updated: {new Date(repo.updated_at).toLocaleDateString()}
              </Text>
            </Box>
          ))
        ) : (
          <Text>Loading repositories...</Text>
        )}
      </Grid>
    </Container>
  );
}

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
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

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
    fetch(`https://api.github.com/users/${profile.githubUsername}/repos`)
      .then((response) => response.json())
      .then((data) => {
        const sortedRepos = data
          .sort(
            (a: GitHubRepo, b: GitHubRepo) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime(),
          )
          .slice(0, 5);
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
          href={profile.externalProfiles.devpost}
        >
          {" "}
          DevPost
        </Link>
        {" or "}
        <Link
          variant="underline"
          colorPalette="cyan"
          fontWeight="bold"
          href={profile.externalProfiles.protopedia}
        >
          Protopedia
        </Link>
        {"... 🤖"}
      </Box>

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
        {projects.map((project) => (
          <Card.Root key={project.id} variant="subtle" overflow="hidden">
            <video
              width="100%"
              height="auto"
              style={{ objectFit: "cover" }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Card.Body gap="2">
              <Card.Title>{project.title}</Card.Title>
              <Stack direction="row">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech.name}
                    colorPalette={tech.colorPalette}
                    variant={{ _dark: "outline", _light: "solid" }}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </Stack>
              <Card.Description>{project.description}</Card.Description>
              {project.sourceUrl && (
                <Link href={project.sourceUrl}>
                  <FaGithub /> Source Code
                </Link>
              )}
            </Card.Body>
          </Card.Root>
        ))}
      </Grid>

      <Heading size="lg" mt={4}>
        My GitHub Library
      </Heading>
      <Text mb={4}>
        Check out my other projects and updates on{" "}
        <Link
          href={profile.githubUrl}
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

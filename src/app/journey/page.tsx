"use client";

import React from "react";
import Script from "next/script";
import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  Link,
  Card,
  Stack,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import PageBanner from "@/components/page-banner";
import SectionHeading from "@/components/section-heading";

const articles = [
  {
    id: "imprint-geesehacks",
    title:
      "The winners of GeeseHacks, and what's next for this student-run hackathon",
    url: "https://uwimprint.ca/the-winners-of-geesehacks-and-whats-next-for-this-student-run-hackathon/",
    image:
      "https://uwimprint.ca/wp-content/uploads/2025/02/img_0088-scaled.jpg",
    description:
      "UW Imprint coverage of the first GeeseHacks — a hackathon with 300+ participants and a 90% project submission rate",
    source: "uwimprint.ca",
  },
  {
    id: "comedia-part1",
    title:
      "Googleも支援！社会実装型ハッカソン「GeeseHacks」を企画した大学生 ー 市橋源さん（前編）",
    url: "https://www.co-media.jp/article/30054",
    image:
      "https://storage.googleapis.com/studio-cms-assets/projects/xNWY64N2Ol/s-1732x1088_v-fms_webp_e66ce0c3-229e-4138-b857-d35e8119ae87.jpg",
    description:
      "中学卒業後に単身で日本を飛び出しカナダへ渡った経緯と、社会実装型ハッカソン「GeeseHacks」の企画について",
    source: "co-media.jp",
  },
  {
    id: "comedia-part2",
    title: "医療現場とテクノロジーの架け橋になる ー 市橋源さん（後編）",
    url: "https://www.co-media.jp/article/30055",
    image:
      "https://storage.googleapis.com/studio-cms-assets/projects/xNWY64N2Ol/s-1702x1202_v-fms_webp_265c2978-44ba-4123-be62-07e47fd8e4b2.jpg",
    description:
      "医療とテクノロジーの融合に強い関心を寄せ、医療DXの未来を描くビジョンについて",
    source: "co-media.jp",
  },
];

export default function Page() {
  return (
    <Container pt={8} maxW={{ base: "md", md: "2xl" }}>
      <PageBanner>
        Read about my journey through interviews and blog posts{"... 📝"}
      </PageBanner>

      <SectionHeading>Interviews</SectionHeading>

      <Stack gap={6} mb={6}>
        {articles.map((article) => (
          <Link
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            <Card.Root
              variant="subtle"
              overflow="hidden"
              transition="all 0.2s"
              _hover={{ transform: "translateY(-2px)", shadow: "md" }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Image
                src={article.image}
                alt={article.title}
                width={{ base: "100%", md: "250px" }}
                height={{ base: "180px", md: "auto" }}
                objectFit="cover"
                loading="lazy"
                flexShrink={0}
              />
              <Card.Body gap="2">
                <Card.Title fontSize="md">{article.title}</Card.Title>
                <Card.Description>{article.description}</Card.Description>
                <Text fontSize="xs" color="gray.500">
                  {article.source}{" "}
                  <FaExternalLinkAlt
                    style={{ display: "inline", fontSize: "0.7em" }}
                  />
                </Text>
              </Card.Body>
            </Card.Root>
          </Link>
        ))}
      </Stack>

      <SectionHeading>Blog</SectionHeading>

      <Box>
        <iframe
          title="Journey blog on note.com"
          className="note-embed"
          src="https://note.com/embed/notes/n062f7019e8b7"
          style={{
            border: "0",
            display: "block",
            width: "100%",
            padding: "0px",
            margin: "10px 0px",
            position: "static",
            visibility: "visible",
          }}
          height="200"
        ></iframe>
        <Script
          src="https://note.com/scripts/embed.js"
          strategy="lazyOnload"
        />
      </Box>
    </Container>
  );
}

"use client";

import React from "react";
import Script from "next/script";
import { Container, Heading, Text } from "@chakra-ui/react";

export default function Page() {
  return (
    <Container pt={14} maxW={{ base: "md", md: "2xl" }} className="page-fade-in">
      <Heading fontSize="2xl" mb={2}>
        My Journey
      </Heading>
      <Text mb={4} opacity={0.7}>
        Thoughts and reflections from my experiences.
      </Text>
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
        height="400"
        loading="lazy"
      ></iframe>
      <Script
        src="https://note.com/scripts/embed.js"
        strategy="lazyOnload"
      />
    </Container>
  );
}

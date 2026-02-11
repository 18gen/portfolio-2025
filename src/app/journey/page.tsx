"use client";

import React from "react";
import Script from "next/script";
import { Container } from "@chakra-ui/react";

export default function Page() {
  return (
    <Container pt={14} maxW={{ base: "md", md: "xl" }}>
      <iframe
        title="Journey blog on note.com"
        className="note-embed"
        src="https://note.com/embed/notes/n062f7019e8b7"
        style={{
          border: "0",
          display: "block",
          maxWidth: "99%",
          width: "494px",
          padding: "0px",
          margin: "10px 0px",
          position: "static",
          visibility: "visible",
        }}
        height="400"
      ></iframe>
      <Script
        src="https://note.com/scripts/embed.js"
        strategy="lazyOnload"
      />
    </Container>
  );
}

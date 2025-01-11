"use client";
import React, { useEffect } from "react";
import { Container } from "@chakra-ui/react";

export default function Page() {
  useEffect(() => {
    // Dynamically add the script tag
    const script = document.createElement("script");
    script.src = "https://note.com/scripts/embed.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container pt={14} maxW={{ base: "md", md: "xl" }}>
      <iframe
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
    </Container>
  );
}

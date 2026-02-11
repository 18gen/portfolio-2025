"use client";

import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function PageBanner({
  children,
}: {
  children: React.ReactNode;
}) {
  const backgroundColor = useColorModeValue("whiteAlpha.800", "whiteAlpha.200");

  return (
    <Box
      borderRadius="lg"
      p={3}
      mb={5}
      textAlign="center"
      background={backgroundColor}
      width="100%"
      css={{ backdropFilter: "blur(10px)" }}
    >
      {children}
    </Box>
  );
}

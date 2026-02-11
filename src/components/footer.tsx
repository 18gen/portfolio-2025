import { Box } from "@chakra-ui/react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <Box as="footer" textAlign="center" py={4} opacity={0.5} fontSize="sm">
      &copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.
    </Box>
  );
}

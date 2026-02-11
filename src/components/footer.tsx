import { Box, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { profile } from "@/data/profile";
import { navItems } from "@/data/navigation";
import NextLink from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const linkedin = profile.contacts.find((c) => c.platform === "linkedin");
  const instagram = profile.contacts.find((c) => c.platform === "instagram");

  return (
    <Box as="footer" textAlign="center" py={6} opacity={0.7} fontSize="sm">
      <VStack gap={3}>
        <HStack gap={4} justify="center">
          {navItems.map((item) => (
            <Link key={item.href} asChild fontWeight="medium">
              <NextLink href={item.href}>{item.label}</NextLink>
            </Link>
          ))}
        </HStack>
        <HStack gap={4} justify="center">
          <Link href={profile.githubUrl} aria-label="GitHub">
            <FaGithub size={18} />
          </Link>
          {linkedin && (
            <Link href={linkedin.url} aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </Link>
          )}
          {instagram && (
            <Link href={instagram.url} aria-label="Instagram">
              <FaInstagram size={18} />
            </Link>
          )}
        </HStack>
        <Text>
          &copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.
        </Text>
      </VStack>
    </Box>
  );
}

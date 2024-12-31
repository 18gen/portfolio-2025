import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { useColorModeValue } from "@/components/ui/color-mode"
export default function Page() {
  return (
    <Container maxW="container.md" pt={14}>

    <Box display="flex" alignItems="center" justifyContent="center" px={4}>
      <VStack spacing={6} align="center">
        {/* Greeting Box */}
        <Box
          borderRadius="lg"
          p={3}
          textAlign="center"
          background="gray.700"
          width="100%"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a full-stack developer in Japan!
        </Box>

        {/* Main Content */}
        <Flex
          align="center"
          justify="center"
          direction={{ base: "column", md: "row" }}
          gap={8}
        >
          {/* Left: Name and Description */}
          <Box textAlign={{ base: "center", md: "left" }}>
            <Heading size="2xl" fontWeight="bold" letterSpacing="tight">
              Gen Ichihashi
            </Heading>
            <Text fontSize="lg" mt={2} opacity={0.8}>
              student at Waterloo
            </Text>
          </Box>

          {/* Right: Avatar */}
          <Avatar size="2xl" name="Gen" src="me.jpg" />
        </Flex>
      </VStack>
    </Box>
    </Container>
  );
}

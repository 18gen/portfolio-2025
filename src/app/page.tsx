'use client'

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
import './globals.css';

export default function Page() {
  const backgroundColor = useColorModeValue("whiteAlpha.800", "whiteAlpha.200");
  const headingClassName = useColorModeValue("text-shadow-lg", "");
  const textClassName = useColorModeValue("text-shadow-sm", "");
  
  return (
    <Container pt={8} maxW={{ base: "md", md: "2xl" }}>
      <Box>
        <Box
          borderRadius="lg"
          p={3}
          mb={5}
          textAlign="center"
          background={backgroundColor}
          width="100%"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hey👋, I study Computer Science at{" "}
          <Text as="span" display={{ base: "inline", md: "none" }}>
            UWaterloo
          </Text>
          <Text as="span" display={{ base: "none", md: "inline" }}>
            University of Waterloo
          </Text>
        </Box>

        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={{ md:"center" }}
          justifyContent={{ md:"space-between"}}
        >
          <Box>
          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight="short"
            className={headingClassName}
          >
            Gen Ichihashi
          </Heading>
          <Text className={textClassName}>Full-Stack Developer based in Japan</Text>
          </Box>
          <Box mt={{ base: 4, md: 0 }} textAlign="center">
            <Avatar
              outlineWidth="2px"
              outlineColor="white"
              outlineStyle="solid"
              w="100px"
              h="100px"
              name="Gen"
              src="me2.jpg"
            />
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}

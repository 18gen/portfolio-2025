import {
  Heading,
  Text,
  Link,
  Box,
  HStack,
  Card,
  Strong,
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import NextLink from "next/link";

export default function Ongoing() {
  return (
    <Box maxH="400px" overflowX="auto" overflowY="hidden" display="flex">
      <HStack gap="3" flexWrap="nowrap" alignItems="flex-start">
        {/* Card 1 */}
        <Card.Root width="260px" height="200px" size="md" variant="subtle">
          <Card.Body>
            <HStack mb="3" gap="3">
              <Avatar src="ongoing/uw.svg.png" name="University of Waterloo" />
              <Heading fontWeight="md" fontSize="md">
                3B Study Term
              </Heading>
            </HStack>
            <Card.Description fontSize="sm">
              Bachelor’s of <Strong color="fg">Computer Science</Strong>,
              Honours with AI specialization
            </Card.Description>
          </Card.Body>
          <Card.Footer>
            <Text fontSize="sm">
              seeking{" "}
              <Link
                variant="underline"
                colorPalette="cyan"
                fontWeight="bold"
                asChild
              >
                <NextLink href="/works">Internship</NextLink>
              </Link>
            </Text>
          </Card.Footer>
        </Card.Root>
      </HStack>
    </Box>
  );
}

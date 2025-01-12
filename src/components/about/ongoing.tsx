import {
    Heading,
    Text,
    Link,
    HStack,
    Card,
    Strong,
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";

export default function Ongoing() {
    return (
        <HStack gap="3">
        <Card.Root
          width="260px"
          height="200px"
          size={{base: "sm", md: "md"}}
          variant="subtle">
          <Card.Body>
            <HStack mb="3" gap="3">
              <Avatar
                src="ongoing/uw.svg.png"
                name="University of Waterloo"
              />
              <Heading fontWeight={{base: "sm", md: "md"}}>
                  3B Study Term
              </Heading>
            </HStack>
            <Card.Description>
              Bachelor’s of Computer Science, Honours with AI specialization
            </Card.Description>
          </Card.Body>
          <Card.Footer>
            <Text fontSize={"sm"}>
              seeking{" "}
              <Link
                variant="underline"
                href="/works"
                colorPalette="cyan"
                fontWeight={"bold"}
              >
                Summer Internship
              </Link>
            </Text>
          </Card.Footer>
        </Card.Root>
        <Card.Root
          width="260px"
          height="200px"
          size="md"
          variant="subtle">
          <Card.Body>
            <HStack mb="3" gap="3">
              <Avatar
                src="works/geesehacks.jpg"
                name="Geesehacks"
              />
              <Heading fontWeight={"md"}>
                  GeeseHacks
              </Heading>
            </HStack>
            <Card.Description>
             <Strong color="fg">Director of 300+ Hackathon</Strong> at UW, secured 22k funding and 600+ applied so far
            </Card.Description>
          </Card.Body>
          <Card.Footer>
            <Text fontSize={"sm"}>
              check out our{" "}
              <Link
                variant="underline"
                href="https://geesehacks.com"
                colorPalette="cyan"
                fontWeight="bold"
              >
                website
              </Link>
            </Text>
          </Card.Footer>
        </Card.Root>
      </HStack>
    )
}
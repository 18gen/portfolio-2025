import {
  Flex,
  Image,
  Button,
  Link,
  Card,
} from "@chakra-ui/react";

export default function Resume() {
  return (
    <Flex gap={4} direction={{ base: "column", md: "row" }}>
      <Card.Root
        overflow="hidden"
        _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
        transition="all 0.2s ease"
      >
        <Card.Header fontWeight="semibold">English</Card.Header>
        <Card.Body gap={3}>
          <Image
            src="works/Resume_2025.jpg"
            alt="Resume Preview English"
            borderRadius="md"
            h={{ md: "400px" }}
          />
          <Link href="https://drive.google.com/file/d/1n2inKycKhVcyljAyL3CyIsnsW9F2K8Xu/view?usp=sharing">
            <Button variant="surface" width="full">
              Open PDF
            </Button>
          </Link>
        </Card.Body>
      </Card.Root>

      <Card.Root
        overflow="hidden"
        _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
        transition="all 0.2s ease"
      >
        <Card.Header fontWeight="semibold">Japanese</Card.Header>
        <Card.Body gap={3}>
          <Image
            src="works/Resume2024_JPN.png"
            alt="Resume Preview Japanese"
            borderRadius="md"
            h={{ md: "400px" }}
          />
          <Link href="https://drive.google.com/drive/folders/1_gwuFC16BVosXXKsgmacPWfzTrud__4_?usp=sharing">
            <Button variant="surface" width="full">
              Open PDF
            </Button>
          </Link>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
}

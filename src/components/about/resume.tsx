import {
  Flex,
  Box,
  Text,
  Image,
  LinkBox,
  Button,
  Link,
} from "@chakra-ui/react";

export default function Resume() {
  return (
    <Flex gap={2} direction={{ base: "column", md: "row" }}>
      <LinkBox mb="3" position="relative">
        <Text fontWeight="semibold" mb="2">
          English
        </Text>
        <Box position="relative">
          <Link href="https://drive.google.com/file/d/1n2inKycKhVcyljAyL3CyIsnsW9F2K8Xu/view?usp=sharing">
            <Image
              src="works/Resume_2025.jpg"
              alt="Resume Preview English"
              borderRadius="md"
              h={{ md: "400px" }}
            />
            <Button
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              px="4"
              py="2"
              variant="surface"
            >
              Open PDF
            </Button>
          </Link>
        </Box>
      </LinkBox>
      <LinkBox mb="3" position="relative">
        <Text fontWeight="semibold" mb="2">
          Japanese
        </Text>
        <Box position="relative">
          <Link href="https://drive.google.com/drive/folders/1_gwuFC16BVosXXKsgmacPWfzTrud__4_?usp=sharing">
            <Image
              src={"works/Resume2024_JPN.png"}
              alt="Resume Preview Japanese"
              borderRadius="md"
              h={{ md: "400px" }}
            />
            <Button
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              px="4"
              py="2"
              variant="surface"
            >
              Open PDF
            </Button>
          </Link>
        </Box>
      </LinkBox>
    </Flex>
  );
}

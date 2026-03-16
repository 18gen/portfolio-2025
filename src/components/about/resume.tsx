import {
  Flex,
  Box,
  Text,
  Image,
  LinkBox,
  Button,
  Link,
} from "@chakra-ui/react";

function OpenPdfButton() {
  return (
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
  );
}

export default function Resume() {
  return (
    <Flex gap={2} direction={{ base: "column", md: "row" }}>
      <LinkBox mb="3" position="relative">
        <Text fontWeight="semibold" mb="2">
          English
        </Text>
        <Box position="relative">
          <Link href="https://drive.google.com/file/d/1i6Dhdmmscaf88TFAWzoqazvFo0YGtQTs/view?usp=sharing">
            <Image
              src="works/Resume_2026.jpg"
              alt="Resume Preview English"
              borderRadius="md"
              h={{ md: "400px" }}
            />
            <OpenPdfButton />
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
            <OpenPdfButton />
          </Link>
        </Box>
      </LinkBox>
    </Flex>
  );
}

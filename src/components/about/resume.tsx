import {
    Flex,
    Box,
    Text,
    Image,
    LinkBox,
    LinkOverlay,
    Button,
} from "@chakra-ui/react";

export default function Resume() {
    
    return (
        <Flex gap={2} direction={{ base: "column", md: "row" }}>
        <LinkBox mb="3" position="relative">
          <Text fontWeight="semibold" mb="2">
            English
          </Text>
          <Box position="relative">
            <Image
              src="works/Resume2024_ENG.jpg"
              alt="Resume Preview English"
              borderRadius="md"
              h={{ md: "400px"}}
            />
            <LinkOverlay
              href="https://drive.google.com/file/d/1srngRaqkvFnD71EGfBTnZoftVcfv3kDI/view?usp=sharing"
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
          </Box>
        </LinkBox>
        <LinkBox mb="3" position="relative">
          <Text fontWeight="semibold" mb="2">
          Japanese
          </Text>
          <Box position="relative">
            <Image
              src={"works/Resume2024_JPN.png"}
              alt="Resume Preview Japanese"
              borderRadius="md"
              h={{ md: "400px"}}
            />
            <LinkOverlay
              href="https://drive.google.com/drive/folders/1_gwuFC16BVosXXKsgmacPWfzTrud__4_?usp=sharing"
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
          </Box>
        </LinkBox>
      </Flex>
    )
}
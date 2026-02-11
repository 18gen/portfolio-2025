import { Box, Heading } from "@chakra-ui/react";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Heading py={2} fontSize={{ base: "lg", md: "xl" }}>
        {children}
      </Heading>
      <Box
        height="3px"
        width="40px"
        bg="cyan.500"
        borderRadius="full"
        mt={1}
        mb={2}
      />
    </>
  );
}

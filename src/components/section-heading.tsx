import { Heading } from "@chakra-ui/react";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Heading
      py={2}
      fontSize={{ base: "lg", md: "xl" }}
      textDecoration="underline"
      textDecorationThickness="4px"
      textUnderlineOffset="3px"
      textDecorationColor="gray"
    >
      {children}
    </Heading>
  );
}

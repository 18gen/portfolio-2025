import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const IslandSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const IslandContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="island"
    m="auto"
    pt={{ base: "50px", sm: "40px", md: "30px" }}
    mb={{ base: "-100px", sm: "-120px", md: "-180px" }}
    w={{ base: 320, sm: 450, md: 650 }}
    h={{ base: 330, sm: 430, md: 550 }}
    position="relative"
  >
    {children}
  </Box>
));

IslandContainer.displayName = "IslandContainer";

const Loader = () => {
  return (
    <IslandContainer>
      <IslandSpinner />
    </IslandContainer>
  );
};

export default Loader;

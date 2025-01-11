import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const IslandSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const IslandContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="island"
    m="auto"
    pt={{ base: "50px", md: "30px" }}
    mb={{ base: '-130px', md: '-180px' }}
    w={{ base: 450, md: 650 }}
    h={{ base: 450, md: 550 }}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <IslandContainer>
      <IslandSpinner />
    </IslandContainer>
  )
}

export default Loader
import { Box } from '@chakra-ui/react'

export default function Footer () {
  return (
    <Box textAlign={"center"} py={4} opacity={0.5} fontSize="sm">
      &copy; {new Date().getFullYear()} Gen Ichihashi. All Rights Reserved.
    </Box>
  )
}

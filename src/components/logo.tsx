import Link from "next/link";
import { Text } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { FaGear } from "react-icons/fa6";

const Logo = () => {
  return (
    <Link
      href="/"
      scroll={false}
      style={{ display: "inline-flex", alignItems: "center" }}
    >
      <FaGear width={30} height={30} />
      <Text
        color={useColorModeValue("gray.800", "whiteAlpha.900")}
        fontFamily="'M PLUS Rounded 1c', sans-serif"
        fontWeight="bold"
        ml={1}
      >
        Gen Ichihashi
      </Text>
    </Link>
  );
};

export default Logo;

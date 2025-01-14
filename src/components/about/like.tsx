import { Text, Link } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";

export default function Like() {
  return (
    <Text fontWeight={"md"}>
      {" "}
      Soccer,{" "}
      <Tooltip showArrow content="🎧 Check out my Spotify playlist 🎧">
        <Link
          variant="underline"
          href="https://open.spotify.com/user/31z7l5ijs2mdlx3ozkhkqajeu7gq?si=7982a1f0336b4fc7"
          colorPalette="red"
          fontWeight={"bold"}
        >
          Music
        </Link>
      </Tooltip>
      ,{" "}
      <Tooltip showArrow content="👓 Check out my work 👓">
        <Link
          variant="underline"
          href="https://sketchfab.com/18gen"
          colorPalette="red"
          fontWeight={"bold"}
        >
          3D modeling
        </Link>
      </Tooltip>
    </Text>
  );
}

import { Text, Link } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { profile } from "@/data/profile";

export default function Like() {
  return (
    <Text fontWeight={"md"}>
      {" "}
      Soccer,{" "}
      <Tooltip showArrow content="🎧 Check out my Spotify playlist 🎧">
        <Link
          variant="underline"
          href={profile.externalProfiles.spotify}
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
          href={profile.externalProfiles.sketchfab}
          colorPalette="red"
          fontWeight={"bold"}
        >
          3D modeling
        </Link>
      </Tooltip>
    </Text>
  );
}

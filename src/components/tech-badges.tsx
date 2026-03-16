import { Badge } from "@chakra-ui/react";
import type { Technology } from "@/data/types";

const BADGE_VARIANT = { _dark: "outline", _light: "solid" } as const;

export default function TechBadges({
  technologies,
  dateRange,
}: {
  technologies: Technology[];
  dateRange?: string;
}) {
  return (
    <>
      {dateRange && <Badge variant={BADGE_VARIANT}>{dateRange}</Badge>}
      {technologies.map((tech) => (
        <Badge
          key={tech.name}
          colorPalette={tech.colorPalette}
          variant={BADGE_VARIANT}
        >
          {tech.name}
        </Badge>
      ))}
    </>
  );
}

export { BADGE_VARIANT };

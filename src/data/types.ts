export type ColorPalette =
  | "blue"
  | "red"
  | "green"
  | "yellow"
  | "orange"
  | "purple"
  | "cyan"
  | "teal"
  | "pink";

export interface Technology {
  name: string;
  colorPalette: ColorPalette;
}

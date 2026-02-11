import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        // Background Colors
        bg: {
          DEFAULT: { value: { _light: "#f0e7db", _dark: "#1B202B" } },
          subtle: { value: { _light: "#f8f4ef", _dark: "#2a2f3a" } },
          muted: { value: { _light: "#f5efe8", _dark: "#232834" } },
        },
        // Foreground Colors (Text Colors)
        fg: {
          DEFAULT: { value: { _light: "#1a202c", _dark: "#e2e8f0" } },
          subtle: { value: { _light: "#4a5568", _dark: "#a0aec0" } },
          muted: { value: { _light: "#718096", _dark: "#718096" } },
          heading: { value: { _light: "#2d3748", _dark: "#ffffff" } },
        },
        // Border Colors
        border: {
          DEFAULT: { value: { _light: "#e2e8f0", _dark: "#2d3748" } },
        },
      },
    },
    tokens: {
      fonts: {
        heading: {
          value:
            "'Inter', 'Roboto', 'M PLUS Rounded 1c', 'BlinkMacSystemFont', 'Helvetica Neue', sans-serif",
        },
        body: {
          value:
            "'Inter', 'Roboto', 'M PLUS Rounded 1c', 'BlinkMacSystemFont', 'Helvetica Neue', sans-serif",
        },
        mono: {
          value: "'Courier New', 'Courier', monospace",
        },
        decorative: {
          value: "'Pacifico', 'Dancing Script', cursive",
        },
      },
      fontSizes: {
        heading: { value: "5xl" },
        body: { value: "sm" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);

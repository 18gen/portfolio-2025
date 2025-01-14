import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import {
  AbsoluteCenter,
  Button as ChakraButton,
  Span,
  Spinner,
} from "@chakra-ui/react";
import * as React from "react";
import { useColorModeValue } from "./color-mode";

interface ButtonLoadingProps {
  loading?: boolean;
  loadingText?: React.ReactNode;
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {
  selected?: boolean;
}

export const ButtonWithState = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const bgColor = useColorModeValue("#1B202B", "white");
    const textColour = useColorModeValue("white", "black");
    const { loading, disabled, loadingText, children, selected, ...rest } =
      props;

    return (
      <ChakraButton
        disabled={loading || disabled}
        ref={ref}
        backgroundColor={selected ? bgColor : undefined}
        color={selected ? textColour : undefined}
        {...rest}
      >
        {loading && !loadingText ? (
          <>
            <AbsoluteCenter display="inline-flex">
              <Spinner size="inherit" color="inherit" />
            </AbsoluteCenter>
            <Span opacity={0}>{children}</Span>
          </>
        ) : loading && loadingText ? (
          <>
            <Spinner size="inherit" color="inherit" />
            {loadingText}
          </>
        ) : (
          children
        )}
      </ChakraButton>
    );
  },
);

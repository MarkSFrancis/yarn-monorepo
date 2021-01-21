import * as React from "react";
import { reduceEachTrailingCommentRange } from "typescript";

export type ButtonVariant = "danger" | "primary" | "default";

export interface ButtonProps {
  text: string;
  variant?: ButtonVariant;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const getVariantStyles = (
  variant?: ButtonVariant
): React.CSSProperties | undefined => {
  switch (variant) {
    case "danger":
      return {
        background: "red",
        color: "white",
      };
    case "primary":
      return {
        background: "green",
        color: "white",
      };
    default:
      return;
  }
};

export const Button = (props: ButtonProps) => {
  const style = getVariantStyles(props.variant);

  return (
    <button style={style} onClick={(e) => props.onClick?.(e)}>
      {props.text}
    </button>
  );
};

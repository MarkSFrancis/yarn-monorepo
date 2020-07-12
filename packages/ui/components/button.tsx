import * as React from "react";

export interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = (props: ButtonProps) => (
  <button onClick={(e) => props.onClick?.(e)}>{props.text}</button>
);

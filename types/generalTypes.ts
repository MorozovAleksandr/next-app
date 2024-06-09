import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";

export type GeneralButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type GeneralPType = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

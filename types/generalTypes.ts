import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  SVGAttributes,
} from "react";

export type GeneralButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type GeneralPType = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export type GeneralDivType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type GeneralSvgType = DetailedHTMLProps<
  SVGAttributes<SVGSVGElement>,
  SVGSVGElement
>;

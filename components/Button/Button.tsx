import { FC, ReactElement, ReactNode } from "react";
import cn from "classnames";

import styles from "./Button.module.css";
import { ButtonMode } from "@/components/Button/types";

interface ButtonProps {
  children: ReactNode;
  appearance: keyof typeof ButtonMode;
}

const Button: FC<ButtonProps> = ({ children, appearance }): ReactElement => {
  return (
    <button
      className={cn(styles.button, {
        ["text-white bg-primary hover:bg-primaryHover"]:
          appearance === ButtonMode.primary,
        ["text-black border-ghost border-[1px] hover:bg-primary hover:text-white"]:
          appearance === ButtonMode.ghost,
      })}
    >
      {children}
    </button>
  );
};

export default Button;

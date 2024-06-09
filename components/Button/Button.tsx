import { FC, ReactElement, ReactNode, useMemo } from "react";
import cn from "classnames";

import styles from "./Button.module.css";
import { ArrowMode, ButtonMode } from "@/components/Button/types";
import { GeneralButtonType } from "@/types/generalTypes";
import Image from "next/image";

interface ButtonProps extends GeneralButtonType {
  children: ReactNode;
  appearance: ButtonMode;
  arrow?: ArrowMode;
}

const Button: FC<ButtonProps> = ({
  children,
  appearance,
  className,
  arrow = ArrowMode.none,
  ...props
}): ReactElement => {
  const renderArrow = useMemo(
    () => (
      <span
        className={cn(styles.arrow, {
          [styles.down]: arrow === ArrowMode.down,
        })}
      >
        <Image src={"/arrow.svg"} alt={"arrow"} width={5.87} height={10} />
      </span>
    ),
    [arrow],
  );

  return (
    <button
      className={cn(styles.button, className, {
        [`text-white bg-primary hover:bg-primaryHover ${styles.buttonPrimary}`]:
          appearance === ButtonMode.primary,
        ["text-black border-ghost border-[1px] hover:bg-primary hover:text-white"]:
          appearance === ButtonMode.ghost,
      })}
      {...props}
    >
      {children}
      {arrow !== ArrowMode.none && renderArrow}
    </button>
  );
};

export default Button;

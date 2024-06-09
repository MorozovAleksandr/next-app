import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { GeneralPType } from "@/types/generalTypes";

interface PProps extends GeneralPType {
  children: ReactNode;
  size?: "s" | "m" | "l";
}

const P: FC<PProps> = ({ size = "m", children }) => {
  return (
    <p
      className={cn({
        ["text-sm leading-[24px]"]: size === "s",
        ["text-base leading-[16px]"]: size === "m",
        ["text-lg leading-[29px]"]: size === "l",
      })}
    >
      {children}
    </p>
  );
};

export default P;

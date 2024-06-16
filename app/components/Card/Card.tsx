import { GeneralDivType } from "@/types/generalTypes";
import { FC, ReactNode } from "react";
import classnames from "classnames";

import style from "./style.module.css";

interface ICardProps extends GeneralDivType {
  color: "white" | "blue";
  children: ReactNode;
  className?: string;
}

const Card: FC<ICardProps> = ({
  color = "white",
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={classnames(className, style.card, {
        ["bg-[#F9F8FF]"]: color === "blue",
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

import { GeneralDivType } from "@/types/generalTypes";
import { FC, ReactNode } from "react";
import { TagColor } from "@/components/Tag/types";
import cn from "classnames";

interface TagProps extends GeneralDivType {
  children: ReactNode;
  size?: "s" | "m";
  color?: TagColor;
  href?: string;
}

const Tag: FC<TagProps> = ({
  children,
  size = "m",
  color = TagColor.ghost,
  href,
  ...props
}) => {
  return (
    <div
      className={cn(
        "inline-block box-border mr-5 rounded-[20px] px-[12px] py-[4px] w-[fit-content]",
        {
          ["text-sm leading-[12px]"]: size === "s",
          ["text-[14px]"]: size === "m",
        },
        {
          ["border-ghost border-[1px]"]: color === TagColor.ghost,
          ["text-white bg-[#DE0000] font-bold"]: color === TagColor.red,
          ["text-white bg-[#B3C0D9] font-bold"]: color === TagColor.grey,
          ["text-green bg-[#C8F8E4] font-bold"]: color === TagColor.green,
          ["text-primary font-bold border-primary border-[1px]"]:
            color === TagColor.primary,
        },
      )}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};

export default Tag;

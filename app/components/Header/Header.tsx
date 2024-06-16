import { GeneralDivType } from "@/types/generalTypes";
import classnames from "classnames";
import Link from "next/link";
import { FC } from "react";

import style from "./style.module.css";

interface ISidebarProps extends GeneralDivType {}

const Header: FC<ISidebarProps> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={classnames(
        "flex items-center justify-center w-full gap-[20px]",
        className,
      )}
    >
      <Link className={style.a} href={"/ssr"}>
        SSR PAGE
      </Link>
      <Link className={style.a} href={"/ssg"}>
        SSG PAGE
      </Link>
    </div>
  );
};
export default Header;

import { GeneralDivType } from "@/types/generalTypes";
import Link from "next/link";
import { FC } from "react";

interface ISidebarProps extends GeneralDivType {}

const Header: FC<ISidebarProps> = (props) => {
  return (
    <div {...props}>
      <Link href={"/about"}>About</Link>
    </div>
  );
};
export default Header;

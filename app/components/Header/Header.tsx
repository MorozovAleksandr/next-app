import { GeneralDivType } from "@/types/generalTypes";
import { FC } from "react";

interface ISidebarProps extends GeneralDivType {}

const Header: FC<ISidebarProps> = (props) => {
  return <div {...props}>Header</div>;
};
export default Header;

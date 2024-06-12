import { GeneralDivType } from "@/types/generalTypes";
import { FC } from "react";

interface ISidebarProps extends GeneralDivType {}

const Sidebar: FC<ISidebarProps> = (props) => {
  return <div {...props}>Sidebar</div>;
};
export default Sidebar;

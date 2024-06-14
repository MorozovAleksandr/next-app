import {GeneralDivType} from "@/types/generalTypes";
import {FC} from "react";
import {Menu} from "..";

interface ISidebarProps extends GeneralDivType {
}

const Sidebar: FC<ISidebarProps> = (props) => {
    return <div {...props}><Menu/></div>;
};
export default Sidebar;

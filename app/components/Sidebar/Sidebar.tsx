import { GeneralDivType } from "@/types/generalTypes";
import { FC } from "react";
import { Menu } from "..";
import LogoIcons from "@/components/svg/Logo/LogoIcons";
import classnames from "classnames";

interface ISidebarProps extends GeneralDivType {}

const Sidebar: FC<ISidebarProps> = ({ className, ...props }) => {
  return (
    <div
      className={classnames(className, "grid content-start gap-[20px]")}
      {...props}
    >
      <div>
        <LogoIcons className={"mt-[34px]"} />
      </div>
      <Menu />
    </div>
  );
};
export default Sidebar;

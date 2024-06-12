import { GeneralDivType } from "@/types/generalTypes";
import { FC } from "react";
import style from "./style.module.css";
import classnames from "classnames";

interface IFooterProps extends GeneralDivType {}

const Footer: FC<IFooterProps> = ({ className, ...props }) => {
  return (
    <footer
      className={classnames(style.footer, className, "bg-primary")}
      {...props}
    >
      <span>Все права защищены</span>
      <span>Пользовательское соглашение</span>
      <span>Политика конфиденциальности</span>
    </footer>
  );
};
export default Footer;

import { FC, ReactElement, ReactNode } from "react";

interface HtagProps {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}

const Htag: FC<HtagProps> = ({ tag, children }): ReactElement => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={"m-0 text-[26px] font-medium leading-[35px]"}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={"m-0 text-[22px] font-medium leading-[29px]"}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={"m-0 text-[20px] font-semibold leading-[27px]"}>
          {children}
        </h3>
      );
    default:
      return <></>;
  }
};

export default Htag;

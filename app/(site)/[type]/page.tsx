import React from "react";
import { Metadata } from "next";
import { firstLevelMenu } from "@/helpers/helpers";

export const metadata: Metadata = {
  title: "Products",
  description: "Generated TypePage by create next app",
};

export const generateStaticParams = async () => {
  return firstLevelMenu.map((menu) => ({
    type: `/${menu.route}`,
  }));
};

const TypePage = ({
  params,
}: {
  params: { type: string };
}): React.JSX.Element => {
  return <div>Страница - {params.type}</div>;
};

export default TypePage;

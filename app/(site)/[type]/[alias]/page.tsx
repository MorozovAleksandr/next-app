import React from "react";
import { Htag } from "@/components";
import { getPage } from "@/api/page";
import { getProducts } from "@/api/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMenu } from "@/api/menu";
import { firstLevelMenu } from "@/helpers/helpers";

export const metadata: Metadata = {
  title: "Products",
  description: "Generated Products by create next app",
};

export const generateStaticParams = async () => {
  const params: { alias: string; type: string }[] = [];

  for (const firstLevelItem of firstLevelMenu) {
    const menu = await getMenu(firstLevelItem.id);

    menu.forEach((item) =>
      item.pages.forEach((page) =>
        params.push({
          type: firstLevelItem.route,
          alias: page.alias,
        }),
      ),
    );
  }

  return params;
};

const AliasPage = async ({
  params,
}: {
  params: { type: string; alias: string };
}): Promise<React.JSX.Element> => {
  const page = await getPage(params.alias);
  const products = await getProducts(page?.category);

  if (!page) {
    notFound();
  }

  return (
    <div>
      <Htag tag="h1">Страница {`${params.type}/${params.alias}`}</Htag>
      <div>{JSON.stringify(page)}</div>
      <div className={"m-5"}></div>
      <div>{JSON.stringify(products)}</div>
    </div>
  );
};

export default AliasPage;

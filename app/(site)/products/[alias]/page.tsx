import React from "react";
import { Htag } from "@/components";
import { getPage } from "@/api/page";
import { getProducts } from "@/api/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMenu } from "@/api/menu";

export const metadata: Metadata = {
  title: "Products",
  description: "Generated Products by create next app",
};

export const generateStaticParams = async () => {
  const menu = await getMenu(0);
  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias })),
  );
};

const Products = async ({
  params,
}: {
  params: { alias: string };
}): Promise<React.JSX.Element> => {
  const page = await getPage(params.alias);
  const products = await getProducts(page?.category);

  if (!page) {
    notFound();
  }
  return (
    <div>
      <Htag tag="h1">Страница с alias - {params.alias}</Htag>
      <div>{JSON.stringify(page)}</div>
      <div className={"m-5"}></div>
      <div>{JSON.stringify(products)}</div>
    </div>
  );
};

export default Products;

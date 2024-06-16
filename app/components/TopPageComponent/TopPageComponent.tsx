import { ITopPageModel, LevelCategory } from "@/types/page";
import { IProductModel } from "@/types/product";
import { FC } from "react";
import { Htag, Tag } from "@/components";
import { TagColor } from "@/components/Tag/types";

import style from "./style.module.css";
import Product from "../Product/Product";

interface ITopPageComponentProps {
  page: ITopPageModel;
  products: IProductModel[];
  firstCategory: LevelCategory | undefined;
}

const TopPageComponent: FC<ITopPageComponentProps> = ({ page, products }) => {
  return (
    <div className={"mt-[40px]"}>
      <div className={style.title}>
        <Htag tag="h1">{page.title}</Htag>
        <Tag size={"m"} color={TagColor.grey}>
          {products.length}
        </Tag>
      </div>
      <div className={"flex gap-[20px] flex-col"}>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      {page.seoText && (
        <div
          className={style.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
    </div>
  );
};

export default TopPageComponent;

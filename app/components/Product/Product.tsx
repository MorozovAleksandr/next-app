import { GeneralDivType } from "@/types/generalTypes";
import { IProductModel } from "@/types/product";
import React, { FC } from "react";
import Card from "../Card/Card";
import Image from "next/image";
import { Htag, P, Rating, Tag } from "@/components";
import classnames from "classnames";
import style from "./style.module.css";
import { TagColor } from "@/components/Tag/types";

interface IProductProps extends GeneralDivType {
  product: IProductModel;
}

const Product: FC<IProductProps> = ({
  product,
  className,
  ...props
}): React.JSX.Element => {
  return (
    <Card
      className={classnames(className, "border-5 p-[30px]")}
      {...props}
      color={"blue"}
    >
      <div className={style.productTitle}>
        <Image width={70} height={70} src={product.image} alt={product.title} />
        <div className={"flex gap-[10px] flex-col"}>
          <Htag tag="h1">{product.title}</Htag>
          <div className={"flex flex-row"}>
            {product.categories.map((category) => (
              <Tag key={category} size={"m"} color={TagColor.green}>
                {category}
              </Tag>
            ))}
          </div>
        </div>
        <Rating
          rating={product.reviewAvg ?? product.initialRating}
          isEditable
        />
      </div>
      <hr className="mt-[20px] mb-[20px]" />

      <P size={"l"}>{product.description}</P>
    </Card>
  );
};

export default Product;

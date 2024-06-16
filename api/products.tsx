import { API } from "@/api/api";
import { IProductModel } from "@/types/product";

export const getProducts = async (
  category: string,
): Promise<IProductModel[]> => {
  const res = await fetch(API.getProductsURL(), {
    method: "POST",
    body: JSON.stringify({
      category,
      limit: 10,
    }),
    headers: new Headers({ "content-type": "application/json" }),
  });

  return res.json();
};

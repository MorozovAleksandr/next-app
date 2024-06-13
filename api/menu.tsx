import { API } from "@/api/api";
import { IMenuItem } from "@/types/menu";

export const getMenu = async (
  firstCategory: number = 0,
): Promise<IMenuItem[]> => {
  const res = await fetch(API.getMenuURL(), {
    method: "POST",
    body: JSON.stringify({ firstCategory }),
    headers: new Headers({ "content-type": "application/json" }),
  });

  return res.json();
};

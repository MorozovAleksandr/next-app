import { IMenuItem } from "@/types/menu";
import { API } from "@/api/api";

export const noCacheFetch = async (
  firstCategory: number,
): Promise<IMenuItem[]> => {
  const res = await fetch(API.getMenuURL(), {
    method: "POST",
    body: JSON.stringify({ firstCategory }),
    headers: new Headers({ "content-type": "application/json" }),
    cache: "no-store",
  });

  return res.json();
};

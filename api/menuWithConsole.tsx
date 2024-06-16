import { API } from "@/api/api";
import { IMenuItem } from "@/types/menu";

export const getMenuWithConsole = async (
  firstCategory: number = 0,
): Promise<IMenuItem[]> => {
  console.log("GET MENU", API.getMenuURL());
  const res = await fetch(API.getMenuURL(), {
    method: "POST",
    body: JSON.stringify({ firstCategory }),
    headers: new Headers({ "content-type": "application/json" }),
  });

  return res.json();
};

import { API } from "@/api/api";
import { ITopPageModel } from "@/types/page";

export const getPage = async (alias: string): Promise<ITopPageModel> => {
  const res = await fetch(API.getPageURL(alias), {
    method: "GET",
    headers: new Headers({ "content-type": "application/json" }),
    next: { revalidate: 10 },
  });

  return res.json();
};

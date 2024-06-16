import { Htag } from "@/components";
import { noCacheFetch } from "@/api/no-cache-fetch";
import { cookies, headers } from "next/headers";

const SSRPage = async () => {
  // Варианты преобразования статической рендеринга в динамический;
  const cookieStore = cookies();
  const headersList = headers();
  const referer = headersList.get("referer");
  const menu = await noCacheFetch(Math.floor(Math.random() * 5));

  console.log("Я - SSR, динамический рендер при каждом обращении");

  return (
    <div>
      <Htag tag={"h1"}>SSR PAGE EXAMPLE</Htag>
      <div>
        {referer}
        {menu?.length}
        {cookieStore.getAll()?.length}
      </div>
    </div>
  );
};

export default SSRPage;

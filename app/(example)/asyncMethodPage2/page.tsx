import { cookies } from "next/headers";
import { Htag } from "@/components";
import { getMenuWithConsole } from "@/api/menuWithConsole";

const asyncMethodPage2 = async () => {
  const cookieStore = cookies();
  const menu = await getMenuWithConsole(0);
  console.log("SSR asyncMethodPage2");

  return (
    <>
      <Htag tag={"h1"}>asyncMethodPage2</Htag>
      {cookieStore.getAll()?.length}
      {menu?.length}
    </>
  );
};

export default asyncMethodPage2;

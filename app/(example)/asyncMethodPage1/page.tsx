import { cookies } from "next/headers";
import { Htag } from "@/components";
import { getMenuWithConsole } from "@/api/menuWithConsole";

const asyncMethodPage1 = async () => {
  const cookieStore = cookies();
  const menu = await getMenuWithConsole(0);
  console.log("SSR asyncMethodPage1");

  return (
    <>
      <Htag tag={"h1"}>asyncMethodPage1</Htag>
      {cookieStore.getAll()?.length}
      {menu?.length}
    </>
  );
};

export default asyncMethodPage1;

import { Htag } from "@/components";

const SSGPage = () => {
  console.log("Я - SSG, статический рендер");

  return <Htag tag={"h1"}>SSG PAGE EXAMPLE</Htag>;
};

export default SSGPage;

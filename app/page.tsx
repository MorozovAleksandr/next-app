import React from "react";
import { Button, Htag, P, Tag } from "@/components";
import { ArrowMode, ButtonMode } from "@/components/Button/types";
import { TagColor } from "@/components/Tag/types";
import { getMenu } from "@/api/menu";

/*export const metadata: Metadata = {
  title: "page",
  description: "Generated by create next app",
};*/

export default async function Home(): Promise<React.JSX.Element> {
  // Пример SSR, страница отрендерилась на сервере, сообщение будет в терминале, а не в консоли
  console.log("i am home");
  const menu = await getMenu(0);

  return (
    <div>
      <Htag tag="h1">HTAG</Htag>
      <Button appearance={ButtonMode.primary}>button</Button>
      <Button appearance={ButtonMode.primary} arrow={ArrowMode.down}>
        button
      </Button>
      <P size={"s"}>S</P>
      <P>M</P>
      <P size={"l"}>L</P>
      <Tag size={"m"} color={TagColor.primary} href={"https://google.com"}>
        TEST
      </Tag>
      <div>
        {menu.map((item) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </div>
    </div>
  );
}

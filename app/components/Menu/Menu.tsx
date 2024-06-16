"use client";
import React, { useEffect, useState } from "react";
import { getMenu } from "@/api/menu";
import { IFirstLevelMenuItem, IMenuItem, IPageItem } from "@/types/menu";
import { LevelCategory } from "@/types/page";
import style from "./styles.module.css";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { firstLevelMenu } from "@/helpers/helpers";

const Menu = ({
  firstCategory = 3,
}: {
  firstCategory?: LevelCategory;
}): React.JSX.Element => {
  const [menu, setMenu] = useState<IMenuItem[]>([]);
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState<number>(firstCategory);

  useEffect(() => {
    (async () => {
      setMenu(await getMenu(activeCategory));
    })();
  }, [activeCategory]);

  useEffect(() => {
    const currentCategory = firstLevelMenu.find(
      (item) => item.route === pathname.split("/")[1],
    );

    if (currentCategory) {
      setActiveCategory(currentCategory.id);
    }
  }, [pathname]);

  const openSecondLevel = (secondCategory: string) => {
    setMenu(
      menu.map((m) => {
        if (m._id.secondCategory === secondCategory) {
          m.isOpened = !m.isOpened;
        } else {
          m.isOpened = false;
        }
        return m;
      }),
    );
  };

  const buildFirstLevel = () => (
    <>
      {firstLevelMenu.map((m) => (
        <div key={m.route}>
          <Link href={`/${m.route}`}>
            <div
              className={classnames(style.firstLevel, {
                [style.firstLevelActive]: m.id == activeCategory,
              })}
            >
              {m.icon}
              <span>{m.name}</span>
            </div>
          </Link>
          {m.id == activeCategory && buildSecondLevel(m)}
        </div>
      ))}
    </>
  );

  const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => (
    <div className={style.secondBlock}>
      {menu.map((m) => {
        if (m.pages.map((p) => p.alias).includes(pathname.split("/")[2])) {
          m.isOpened = true;
        }

        return (
          <div key={m._id.secondCategory}>
            <div
              className={style.secondLevel}
              onClick={() => openSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>
            <div
              className={classnames(style.secondLevelBlock, {
                [style.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        );
      })}
    </div>
  );
  const buildThirdLevel = (pages: IPageItem[], route: string) =>
    pages.map((p) => {
      return (
        <Link
          key={p.alias}
          href={`/${route}/${p.alias}`}
          className={classnames(style.thirdLevel, {
            [style.thirdLevelActive]: `/${route}/${p.alias}` === pathname,
          })}
        >
          {p.category}
        </Link>
      );
    });

  return <div className={classnames(style.menu)}>{buildFirstLevel()}</div>;
};

export default Menu;

"use client";
import React, { useEffect, useState } from "react";
import { getMenu } from "@/api/menu";
import { IFirstLevelMenuItem, IMenuItem, IPageItem } from "@/types/menu";
import CoursesIcon from "@/components/svg/Courses/CoursesIcon";
import { LevelCategory } from "@/types/page";
import ProductsIcon from "@/components/svg/Products/ProductsIcon";
import BooksIcon from "@/components/svg/Books/BooksIcon";
import ServicesIcon from "@/components/svg/Services/ServicesIcon";
import style from "./styles.module.css";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const firstLevelMenu: IFirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: LevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: LevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: LevelCategory.Books,
  },
  {
    route: "products",
    name: "Товары",
    icon: <ProductsIcon />,
    id: LevelCategory.Products,
  },
];

const Menu = ({
  firstCategory = 3,
}: {
  firstCategory?: LevelCategory;
}): React.JSX.Element => {
  const [menu, setMenu] = useState<IMenuItem[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    (async () => {
      setMenu(await getMenu(0));
    })();
  }, []);

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

  // const [activeCategory, setActiveCategory] = useState<number>(LevelCategory.Courses);
  const buildFirstLevel = () => (
    <>
      {firstLevelMenu.map((m) => (
        <div key={m.route}>
          <Link href={`/${m.route}`}>
            <div
              className={classnames(style.firstLevel, {
                [style.firstLevelActive]: m.id == firstCategory,
              })}
            >
              {m.icon}
              <span>{m.name}</span>
            </div>
          </Link>
          {m.id == firstCategory && buildSecondLevel(m)}
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

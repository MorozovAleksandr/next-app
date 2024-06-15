// "use client";
import React from "react";
import { getMenu } from "@/api/menu";
import { IFirstLevelMenuItem, IPageItem } from "@/types/menu";
import CoursesIcon from "@/components/svg/Courses/CoursesIcon";
import { LevelCategory } from "@/types/page";
import ProductsIcon from "@/components/svg/Products/ProductsIcon";
import BooksIcon from "@/components/svg/Books/BooksIcon";
import ServicesIcon from "@/components/svg/Services/ServicesIcon";
import style from "./styles.module.css";
import classnames from "classnames";
import Link from "next/link";

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

const Menu = async ({
  firstCategory = 3,
}: {
  firstCategory?: LevelCategory;
}): Promise<React.JSX.Element> => {
  const menu = await getMenu(0);
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
      {menu.map((m) => (
        <div key={m._id.secondCategory}>
          <div className={style.secondLevel}>{m._id.secondCategory}</div>
          <div
            className={classnames(style.secondLevelBlock, {
              [style.secondLevelBlockOpened]: m.isOpened,
            })}
          >
            {buildThirdLevel(m.pages, menuItem.route)}
          </div>
        </div>
      ))}
    </div>
  );
  const buildThirdLevel = (pages: IPageItem[], route: string) =>
    pages.map((p) => (
      <Link
        key={p.alias}
        href={`/${route}/${p.alias}`}
        className={classnames(style.thirdLevel, {
          [style.thirdLevelActive]: false,
        })}
      >
        {p.category}
      </Link>
    ));

  return <div className={classnames(style.menu)}>{buildFirstLevel()}</div>;
};

export default Menu;

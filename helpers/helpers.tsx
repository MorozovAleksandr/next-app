import { IFirstLevelMenuItem } from "@/types/menu";
import CoursesIcon from "@/components/svg/Courses/CoursesIcon";
import { LevelCategory } from "@/types/page";
import ServicesIcon from "@/components/svg/Services/ServicesIcon";
import BooksIcon from "@/components/svg/Books/BooksIcon";
import ProductsIcon from "@/components/svg/Products/ProductsIcon";
import React from "react";

export const firstLevelMenu: IFirstLevelMenuItem[] = [
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

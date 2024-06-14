import React from "react";
import {LevelCategory} from "@/types/page";

export interface IPageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface IMenuItem {
    _id: {
        secondCategory: string;
    };
    isOpened?: boolean;
    pages: IPageItem[];
}

export interface IFirstLevelMenuItem {
    route: string;
    name: string;
    icon: React.JSX.Element;
    id: LevelCategory
}

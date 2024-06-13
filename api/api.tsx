export class API {
  static MENU_URL = "/api/top-page/find";
  static PAGE_URL = "/api/top-page/byAlias";
  static PRODUCTS_URL = "/api/product/find";

  static getMenuURL = () => {
    return process.env.NEXT_PUBLIC_DOMAIN + this.MENU_URL;
  };

  static getPageURL = (alias: string) => {
    return process.env.NEXT_PUBLIC_DOMAIN + this.PAGE_URL + "/" + alias;
  };

  static getProductsURL = () => {
    return process.env.NEXT_PUBLIC_DOMAIN + this.PRODUCTS_URL;
  };
}

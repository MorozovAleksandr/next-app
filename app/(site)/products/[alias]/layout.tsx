import React from "react";

const ProductsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      PRODUCTS_LAYOUT
      {children}
    </>
  );
};

export default ProductsLayout;

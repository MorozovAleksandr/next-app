import React from "react";

const ProductsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      PRODUCT_LAYOUT
      {children}
    </>
  );
};

export default ProductsLayout;

import React from "react";

interface Props {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <>
      <main className="">{children}</main>
    </>
  );
};

export default MarketingLayout;

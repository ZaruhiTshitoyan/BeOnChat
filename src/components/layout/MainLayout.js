import React from "react";

import Header from "@/components/Header";

const MainLayout = ({ header, children }) => {
  console.log("header", header);
  const displayHeader = header ? <Header/> : "";

  return (
    <div>
      { displayHeader }
      { children }
    </div>
  );
};

export default MainLayout;

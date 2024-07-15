import React, { ReactNode } from "react";
import Header from "../Header/index";
import Footer from "../Footer/index";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="d-flex flex-column justify-content-between ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

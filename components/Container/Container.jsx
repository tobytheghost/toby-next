import React from "react";
import { useRouter } from "next/router";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Container = ({ children, frontMatter }) => {
  const router = useRouter();

  const headerType = router.pathname === "/" ? "home" : "page";

  return (
    <>
      <Header type={headerType} />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Container;

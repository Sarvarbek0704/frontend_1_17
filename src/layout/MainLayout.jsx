import React from "react";
import { LayoutWrapper } from "./Layout.styled";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slide from "../components/slide";
import Katalog from "../components/Katalog";
import Reasons from "../components/reasons";

function MainLayout() {
  return (
    <LayoutWrapper>
      <div>
        <Navbar />
        <Slide />
        <Katalog />
        <Reasons />
      </div>
      <Footer />
    </LayoutWrapper>
  );
}

export default MainLayout;

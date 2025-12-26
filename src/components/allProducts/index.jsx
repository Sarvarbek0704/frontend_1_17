import React from "react";
import Products from "../products";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import "./allProduct.css";

function AllProducts() {
  return (
    <div className="allProducts">
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
}

export default AllProducts;

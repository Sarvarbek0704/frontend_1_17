import React from "react";
import MainLayout from "./layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import Basket from "./components/basket";
import AllProducts from "./components/allProducts";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <h1>Hello World</h1>
          </MainLayout>
        }
      />
      <Route path="/basket" element={<Basket></Basket>} />
      <Route path="/all-products" element={<AllProducts></AllProducts>} />
    </Routes>
  );
}

export default App;

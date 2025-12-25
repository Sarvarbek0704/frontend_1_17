import React from "react";
import MainLayout from "./layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import Basket from "./components/basket";

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
    </Routes>
  );
}

export default App;

import React, { useEffect } from "react";
import "normalize.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import { HomePage, CategoryPage, ProductDetailsPage } from "./pages";
import { Footer, NavBar } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "./redux/slices/ProductsSlice";

function App() {
  const Status = useSelector((state) => state.Data.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Status === "idle") {
      dispatch(fetchProductData());
    }
  });

  return (
    <Div>
      <GlobalStyle />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories/:category" element={<CategoryPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>
        <Footer />
      </Router>
    </Div>
  );
}

const Div = styled.div``;

export default App;

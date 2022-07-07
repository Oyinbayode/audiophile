import React from "react";
import "normalize.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import {
  HomePage,
  CategoryPage,
  ProductDetailsPage,
  CheckoutPage,
} from "./pages";
import { Footer, NavBar } from "./components";

function App() {
  return (
    <Div>
      <GlobalStyle />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories/:category" element={<CategoryPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </Router>
    </Div>
  );
}

const Div = styled.div``;

export default App;

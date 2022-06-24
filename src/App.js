import React, { useEffect } from "react";
import "normalize.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import { HomePage, CategoryPage, ProductDetailsPage } from "./pages";
import { Footer, NavBar } from "./components";
import { useDispatch } from "react-redux";
import { emptyCart } from "./redux/slices/cartSlice";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(emptyCart);
  // }, [dispatch]);

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
        <button onClick={() => dispatch(emptyCart())}>Click me</button>
      </Router>
    </Div>
  );
}

const Div = styled.div``;

export default App;

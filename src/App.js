import React from "react";
import "normalize.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import Homepage from "./pages/Homepage";
import { Footer, NavBar } from "./components";

function App() {
  return (
    <Div>
      <GlobalStyle />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </Router>
    </Div>
  );
}

const Div = styled.div``;

export default App;

import React from "react";
import "normalize.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/NavBar";
import GlobalStyle from "./globalStyles";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Div>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </Div>
  );
}

const Div = styled.div``;

export default App;

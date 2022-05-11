import React from "react";
import "normalize.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import GlobalStyle from "./globalStyles";
import HomeHero from "./components/HomeHero";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <HomeHero />
        {/* <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes> */}
      </Router>
    </>
  );
}

export default App;

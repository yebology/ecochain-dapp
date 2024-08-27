import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/fixed/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Footer } from "./components/fixed/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

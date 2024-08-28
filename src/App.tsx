import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/fixed/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Footer } from "./components/fixed/Footer";
import { NFT } from "./views/NFT";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft" element={<NFT />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

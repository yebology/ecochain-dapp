import "./App.css";
import { Navbar } from "./components/fixed/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Footer } from "./components/fixed/Footer";
import { NFT } from "./views/NFT";
import { WasteBankView } from "./views/WasteBankView";
import { TransactionView } from "./views/TransactionView";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft" element={<NFT />} />
        <Route path="/waste_bank" element={<WasteBankView />} />
        <Route path="/transaction" element={<TransactionView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/fixed/Navbar";
import { Footer } from "./components/fixed/Footer";
import { Home } from "./views/Home";
import { NFT } from "./views/NFT";
import { WasteBankView } from "./views/WasteBankView";
import { TransactionView } from "./views/TransactionView";
import { useEffect, useState } from "react";
import { connectWallet } from "./services/wallet.ts";
import { LoadingModal } from "./components/modal/LoadingModal.tsx";

export const Content = () => {
  const [account, setAccount] = useState("");

  const onConnect = async () => {
    await connectWallet();
    setAccount(sessionStorage.getItem("account") || "");
  };

  useEffect(() => {
    const account = sessionStorage.getItem("account");
    if (account) {
      setAccount(sessionStorage.getItem("account") || "");
    }
  }, [account]);

  return (
    <div>
      <Navbar onConnect={onConnect} account={account} />
      <Routes>
        <Route path="/" element={<Home account={account} />} />
        <Route path="/nft" element={<NFT />} />
        <Route path="/waste_bank" element={<WasteBankView />} />
        <Route path="/transaction" element={<TransactionView />} />
      </Routes>
      <Footer />
      <LoadingModal />
    </div>
  );
};

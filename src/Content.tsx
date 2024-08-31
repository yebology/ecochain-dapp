import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/fixed/Navbar";
import { Footer } from "./components/fixed/Footer";
import { Home } from "./views/Home";
import { NFT } from "./views/NFT";
import { WasteBankView } from "./views/WasteBankView";
import { TransactionView } from "./views/TransactionView";
import { useEffect, useState } from "react";
import { LoadingModal } from "./components/modal/LoadingModal.tsx";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

export const Content = () => {
  const [account, setAccount] = useState("");
  const { address, isConnected } = useWeb3ModalAccount()

  useEffect(() => {
    if (isConnected && address) {
      setAccount(address.toString());
    }
    else {
      setAccount("")
    }
  }, [address, isConnected]);

  return (
    <div>
      <Navbar account={account} />
      <Routes>
        <Route path="/" element={<Home account={account} />} />
        <Route path="/nft" element={<NFT account={account} />} />
        <Route path="/waste_bank" element={<WasteBankView />} />
        <Route
          path="/transaction"
          element={<TransactionView account={account} />}
        />
      </Routes>
      <Footer />
      <LoadingModal />
    </div>
  );
};

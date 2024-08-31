import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import { Content } from "./Content";

const projectId = import.meta.env.VITE_WALLET_CONNECT_ID;

const network = {
  chainId: 11155111,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia.etherscan.io/",
  rpcUrl: "https://rpc.sepolia.org/",
};

const metadata = {
  name: "EcoChain",
  description: "WasteBanks",
  url: "localhost",
  icons: ["https://avatars.mywebsite.com/"],
};

const ethersConfig = defaultConfig({ metadata });

createWeb3Modal({
  ethersConfig,
  chains: [network],
  projectId,
});

function App() {

  return <Content />;
}

export default App;

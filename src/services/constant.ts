import { ethers } from "ethers";
import contractAbi from "../abi/abi.json";

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
const contractNetwork = import.meta.env.VITE_NETWORK;
const contractApiKey = import.meta.env.VITE_API_KEY;

export async function getContractWithSigner() {
  const provider = new ethers.BrowserProvider((window as any).ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  return contract;
}

export async function getContractWithoutSigner() {
  const provider = new ethers.AlchemyProvider(contractNetwork, contractApiKey);
  const contract = new ethers.Contract(contractAddress, contractAbi, provider);
  return contract;
}

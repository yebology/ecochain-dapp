import { getContractWithoutSigner } from "./constant";

export async function getWasteBanks() {
  return await loadWasteBanks();
}

async function loadWasteBanks() {
  try {
    const contract = await getContractWithoutSigner();
    const wasteBanks = await contract.getWasteBanks();
    return structuredWasteBanks(wasteBanks);
  } catch (error) {
    console.log(error);
    return "";
  }
}

function structuredWasteBanks(wasteBanks: any) {
  const wasteBankList = wasteBanks.map((wasteBank: any) => ({
    wallet: wasteBank.wallet.toString(),
    country: wasteBank.country,
    city: wasteBank.city,
    linkToMap: wasteBank.linkToMap,
  }));
  return wasteBankList;
}

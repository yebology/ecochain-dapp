import { getContractWithoutSigner, getContractWithSigner } from "./constant";

export async function swapTokenWithNFT(tokenId: number) {
  try {
    const contract = await getContractWithSigner();
    const transaction = await contract.swapTokenWithNFT(tokenId);
    return transaction;
  } catch (error) {
    console.log(error);
    return "";
  }
}

export async function getNFTArts() {
  return await loadNFTArts();
}

async function loadNFTArts() {
  try {
    const contract = await getContractWithoutSigner();
    const nftArts = await contract.getNFTArts();
    return structuredNFTArts(nftArts);
  } catch (error) {
    console.log(error);
    return "";
  }
}

function structuredNFTArts(nftArts: any) {
  const nftArtList = nftArts.map((nftArt: any) => ({
    id: nftArt.id,
    name: nftArt.name,
    description: nftArt.description,
    image: nftArt.image,
    price: nftArt.price,
  }));
  return nftArtList;
}

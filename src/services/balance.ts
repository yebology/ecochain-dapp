import { getContractWithoutSigner } from "./constant";

export async function getUserBalance(user: string) {
  try {
    const contract = await getContractWithoutSigner();
    const balance = await contract.getUserBalance(user);
    return parseFloat(balance);
  } 
  catch (error) {
    console.log(error);
    return 0;
  }
}

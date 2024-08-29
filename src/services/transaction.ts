import { getContractWithoutSigner } from "./constant";

export async function getTransactions() {
  return await loadTransactions();
}

async function loadTransactions() {
  try {
    const contract = await getContractWithoutSigner();
    const transactions = await contract.getTransactions();
    return structuredTransactions(transactions);
  } catch (error) {
    console.log(error);
    return "";
  }
}

function structuredTransactions(transactions: any) {
  const transactionList = transactions.map((transaction: any) => ({
    wasteBankWallet: transaction.wasteBankWallet.toString(),
    user: transaction.user.toString(),
    bottleWeightInKg: transaction.bottleWeightInKg,
    paperWeightInKg: transaction.paperWeightInKg,
    canWeightInKg: transaction.canWeightInKg,
    timestamp: transaction.timestamp,
  }));
  return transactionList;
}

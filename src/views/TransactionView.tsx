import React, { useEffect, useState } from "react";
import { Transaction } from "../utils/interface";
import { TransactionSection } from "../components/section/TransactionSection";
import { getTransactions } from "../services/transaction";
import { setGlobalState } from "../utils/global";

type TransactionViewProps = {
  account: string;
};

export const TransactionView: React.FC<TransactionViewProps> = ({
  account,
}) => {
  const [userTransactions, setUserTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setGlobalState("loadingModal", "scale-100");
        const data = await getTransactions();
        const filtered = data.filter((transaction: Transaction) => {
          return transaction.user === account
        });
        setUserTransactions(filtered);
      } 
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [account]);

  return (
    <div className="relative mt-28 mx-10">
      <div className="absolute top-0 bottom-0 right-0 my-auto w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>
      <div className="absolute top-0 bottom-0 left-0 my-auto w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>
      <TransactionSection data={userTransactions} />
    </div>
  );
};

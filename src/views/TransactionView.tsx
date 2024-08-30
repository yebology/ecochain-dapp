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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getTransactions();
        const filtered = data.filter(
          (transaction: Transaction) => transaction.user === account
        );
        setUserTransactions(filtered);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [account]);

  useEffect(() => {
    if (loading) {
      setGlobalState("loadingModal", "scale-100");
    } else {
      setGlobalState("loadingModal", "scale-0");
    }
  }, [loading]);

  return (
    <div className="relative mt-28 mx-10">
      <div className="absolute top-0 bottom-0 right-0 my-auto w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>
      <div className="absolute top-0 bottom-0 left-0 my-auto w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>
      <TransactionSection data={userTransactions} />
    </div>
  );
};

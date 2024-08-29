import { useEffect, useState } from "react";
import { Transaction } from "../utils/interface";
import { transactions } from "../utils/list";
import { TransactionSection } from "../components/section/TransactionSection";

export const TransactionView = () => {
  const [query, setQuery] = useState("");
  const [filteredTransaction, setFilteredTransaction] = useState<Transaction[]>(
    []
  );

  return (
    <div className="relative mt-28 mx-10">
      <div className="absolute top-0 bottom-0 right-0 my-auto w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>
      <div className="absolute top-0 bottom-0 left-0 my-auto w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>
      <TransactionSection data={transactions} />
    </div>
  );
};

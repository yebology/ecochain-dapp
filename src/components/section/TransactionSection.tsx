import React from "react";
import { Transaction } from "../../utils/interface";
import not_found from "../../assets/not_found.png";
import { TransactionCard } from "../card/TransactionCard";

type TransactionSectionProps = {
  data: Transaction[];
};

export const TransactionSection: React.FC<TransactionSectionProps> = ({
  data,
}) => {
  return (
    <div className="my-12">
      <div className="flex flex-row items-center space-x-4 mb-6">
        <h1 className="font-bold text-3xl text-n-7">Recent Transaction</h1>
      </div>
      {data.length == 0 ? (
        <div className="w-full flex items-center flex-col">
          <img src={not_found} alt="Not Found" className="size-80" />
          <h1 className="text-n-7 font-bold text-3xl"> No Transaction Yet! </h1>
        </div>
      ) : (
        <div className="flex flex-col w-full">
          {data.map((transaction, index) => (
            <TransactionCard key={index} data={transaction} />
          ))}
        </div>
      )}
    </div>
  );
};

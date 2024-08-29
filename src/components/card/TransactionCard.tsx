import React, { useEffect, useState } from "react";
import { Transaction, WasteBank } from "../../utils/interface";
import { timestampToDateConverter, truncate } from "../../utils/helper";
import {
  FaWallet,
  FaTrashAlt,
  FaRecycle,
  FaMapMarkerAlt,
  FaCopy,
} from "react-icons/fa";
import { wasteBanks } from "../../utils/list";

type TransactionCardProps = {
  data: Transaction;
};

export const TransactionCard: React.FC<TransactionCardProps> = ({ data }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  
  const totalRecycledWeight =
    data.bottleWeightInKg + data.canWeightInKg + data.paperWeightInKg;

  const handleCopy = (wallet : string) => {
    try {
      navigator.clipboard.writeText(wallet)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (data) {
      const filtered: WasteBank | undefined = wasteBanks.find(
        (wasteBank: WasteBank) => wasteBank.wallet === data.wasteBankWallet
      );
      if (filtered) {
        setCountry(filtered.country);
        setCity(filtered.city);
      }
    }
  }, [data]);

  return (
    <div className="relative rounded-xl hover:scale-105 transform transition duration-500 shadow-lg cursor-pointer mr-4 mb-6 mt-4 h-auto gradient-border bg-gradient-to-r from-green-400 to-blue-500">
      <div className="inner-content rounded-lg overflow-hidden bg-white shadow-md p-6 relative">
        <div className="flex flex-row w-full space-x-6">
          <div className="flex flex-col items-center space-y-1 justify-center">
            <FaRecycle className="text-green-600" size={70} />
            <h5 className="text-n-7 font-bold text-md">
              {timestampToDateConverter(data.timestamp)}
            </h5>
            <h5 className="text-sm text-green-500 font-semibold">
              + $RCYCL {totalRecycledWeight}
            </h5>
          </div>
          <div>
            <div className="text-n-7 flex flex-row space-x-1 my-2 items-center">
              <FaMapMarkerAlt className="text-red-500 mr-3" />
              <h5 className="font-bold">Location : </h5>
              <h5>
                {city}, {country}
              </h5>
            </div>

            <div className="text-n-7 flex flex-row space-x-1 my-2 items-center">
              <FaWallet className="text-indigo-500 mr-3" />
              <h5 className="font-bold">Waste Bank Wallet : </h5>
              <h5>{truncate(data.wasteBankWallet, 4, 4, 11)}</h5>
              <FaCopy onClick={() => handleCopy(data.wasteBankWallet)} className="text-gray-500 ml-2" />
            </div>

            <div className="text-n-7 flex flex-row space-x-1 my-2 items-center">
              <FaTrashAlt className="text-orange-500 mr-3" />
              <h5 className="font-bold">Bottle Weight (Kg) :</h5>
              <h5>{data.bottleWeightInKg}</h5>
            </div>

            <div className="text-n-7 flex flex-row space-x-1 my-2 items-center">
              <FaTrashAlt className="text-red-500 mr-3" />
              <h5 className="font-bold">Paper Weight (Kg) :</h5>
              <h5>{data.paperWeightInKg}</h5>
            </div>

            <div className="text-n-7 flex flex-row space-x-1 my-2 items-center">
              <FaTrashAlt className="text-yellow-500 mr-3" />
              <h5 className="font-bold">Can Weight (Kg) :</h5>
              <h5>{data.canWeightInKg}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Transaction, WasteBank } from "../../utils/interface";
import { timestampToDateConverter, truncate } from "../../utils/helper";
import {
  FaWallet,
  FaWeightHanging,
  FaCalendarAlt,
  FaRecycle,
  FaMapMarkerAlt,
  FaCopy
} from "react-icons/fa";
import { wasteBanks } from "../../utils/list";

type TransactionCardProps = {
  data: Transaction;
};

export const TransactionCard: React.FC<TransactionCardProps> = ({ data }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

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

  const totalRecycledWeight =
    data.bottleWeightInKg + data.canWeightInKg + data.paperWeightInKg;

  return (
    <div className="rounded-xl hover:scale-105 transform transition duration-500 shadow-lg cursor-pointer mr-4 mb-6 mt-4 h-auto gradient-border bg-gradient-to-r from-green-400 to-blue-500">
      <div className="inner-content rounded-lg overflow-hidden bg-white shadow-md p-6">
        <div className="flex flex-col w-full text-center items-center justify-center">
          <div className="flex flex-row items-center">
            <FaRecycle className="text-green-600 mr-2" />
            <h5 className="text-n-7 font-bold text-lg">Transaction Details</h5>
          </div>
        </div>

        <div className="flex flex-row w-full my-2 text-center items-center justify-center">
          <FaCalendarAlt className="text-gray-500 mr-3" />
          <h5 className="text-n-7 font-bold text-sm">
            {timestampToDateConverter(data.timestamp)}
          </h5>
        </div>

        <h5 className="text-n-7 text-sm text-green-700 font-semibold">
          +{totalRecycledWeight} RCYCL
        </h5>

        <div className="text-n-7 flex flex-row space-x-1 my-2 items-center justify-center">
          <FaMapMarkerAlt className="text-red-500 mr-3" />
          <h5 className="font-bold">Location: </h5>
          <h5>
            {city}, {country}
          </h5>
        </div>

        <div className="text-n-7 flex flex-row space-x-1 my-2 items-center justify-center">
          <FaWallet className="text-indigo-500 mr-3" />
          <h5 className="font-bold">Waste Bank Wallet: </h5>
          <h5>{truncate(data.wasteBankWallet, 4, 4, 11)}</h5>
          <FaCopy className="text-gray-500 ml-2" />
        </div>

        <div className="text-n-7 space-y-4">
          <div className="flex flex-col space-y-2 items-center justify-center">
            <div className="flex items-center">
              <FaWeightHanging className="text-orange-500 mr-3" />
              <p className="mb-0">
                <strong>Bottle Weight (Kg):</strong> {data.bottleWeightInKg}
              </p>
            </div>
            <div className="flex items-center">
              <FaWeightHanging className="text-red-500 mr-3" />
              <p className="mb-0">
                <strong>Paper Weight (Kg):</strong> {data.paperWeightInKg}
              </p>
            </div>
            <div className="flex items-center">
              <FaWeightHanging className="text-yellow-500 mr-3" />
              <p className="mb-0">
                <strong>Can Weight (Kg):</strong> {data.canWeightInKg}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

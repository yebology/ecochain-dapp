import React from "react";
import { WasteBank } from "../../utils/interface";
import { FaCopy, FaMapMarkerAlt, FaRegFlag, FaWallet } from "react-icons/fa";
import { truncate } from "../../utils/helper";

type WasteBankCardProps = {
  data: WasteBank;
};

export const WasteBankCard: React.FC<WasteBankCardProps> = ({ data }) => {

  const handleCopy = (wallet : string) => {
    try {
      navigator.clipboard.writeText(wallet)
    }
    catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="rounded-xl hover:scale-105 transform transition duration-500 shadow-lg cursor-pointer mr-4 mb-6 mt-4 h-auto gradient-border">
      <div className="inner-content rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://ipfs.io/ipfs/QmbZ4XsP6MbSGBKJKtRpw4E8oeZfjyBF8596y31bAKWsjc"
            alt={data.city}
            className="rounded-t-lg h-48 w-full object-cover transition-transform duration-300 ease-out transform hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-white bg-opacity-80 px-2 py-1 rounded-lg shadow-md">
            <div className="flex flex-row space-x-2 items-center">
              <FaRegFlag className="text-green-500" />
              <h5 className="text-sm font-bold text-gray-800">
                {" "}
                {data.city}, {data.country}{" "}
              </h5>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center text-gray-600 mb-2">
            <FaMapMarkerAlt className="mr-3 text-blue-500" />
            <a
              href={data.linkToMap}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on Map
            </a>
          </div>
          <div className="flex items-center text-gray-600">
            <FaWallet className="mr-3 text-purple-500" />
            <span className="">{truncate(data.wallet, 4, 4, 11)}</span>
            <FaCopy onClick={() => handleCopy(data.wallet)} className="text-gray-500 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { NFTArt } from "../../utils/interface";
import { FaCoins } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

type NFTArtCardProps = {
  data: NFTArt;
};

export const NFTArtCard: React.FC<NFTArtCardProps> = ({ data }) => {
  return (
    <div className="rounded-xl hover:scale-105 transform transition duration-500 shadow-lg cursor-pointer mr-4 mb-6 mt-4 h-auto gradient-border">
      <div className="inner-content rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={data.image}
            alt={data.name}
            className="rounded-t-lg h-56 w-full object-cover transition-transform duration-300 ease-out transform hover:scale-110"
          />
          <div className="absolute top-2 left-2 p-2 bg-white bg-opacity-80 rounded-lg shadow-md flex items-center">
            <FaCoins className="text-yellow-500 mr-1" />
            <h5 className="text-gray-700 font-bold">$RCYCL {data.price}</h5>
          </div>
        </div>

        <div className="p-4">
          <h5 className="font-bold text-lg mb-2 text-gray-800">{data.name}</h5>
          <p className="text-sm text-gray-600">{data.description}</p>
        </div>
        <div className="p-4">
          <button
            style={{ backgroundColor: "#66BB6A" }}
            className="rounded-xl p-3 w-full"
          >
            <div className="flex flex-row w-full items-center justify-center space-x-1">
              <TiShoppingCart size={24} />
              <h5 className="text-white font-semibold text-center uppercase">
                Purchase now
              </h5>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

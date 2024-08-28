import React from "react";
import { NFTArt } from "../../utils/interface";
import not_found from "../../assets/not_found.png";
import { NFTArtCard } from "../card/NFTArtCard";

type NFTArtSectionProps = {
  data: NFTArt[];
};

export const NFTArtSection: React.FC<NFTArtSectionProps> = ({data}) => {
  return (
    <div className="my-12">
      <div className="flex flex-row items-center space-x-4 mb-6">
        <h1 className="font-bold text-3xl text-n-7">All NFT Art</h1>
      </div>
      {data.length == 0 ? (
        <div className="w-full flex items-center flex-col">
          <img src={not_found} alt="Not Found" className="size-80" />
          <h1 className="text-n-1 font-bold text-3xl"> Data Not Found! </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {data.map((nftArt) => (
            <NFTArtCard key={nftArt.id} data={nftArt} />
          ))}
        </div>
      )}
    </div>
  );
};

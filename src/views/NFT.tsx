import { useEffect, useState } from "react";
import { SearchBar } from "../components/bar/SearchBar";
import { nftArtList } from "../utils/list";
import { NFTArt } from "../utils/interface";
import { NFTArtSection } from "../components/section/NFTArtSection";

export const NFT = () => {
  const [query, setQuery] = useState("");
  const [filteredNFTArt, setFilteredNFTArt] = useState<NFTArt[]>([]);

  useEffect(() => {
    if (nftArtList) {
      const filteredData = nftArtList.filter((nftArt: NFTArt) =>
        nftArt.name.toLocaleLowerCase().includes(query.toLowerCase())
      );
      setFilteredNFTArt(filteredData);
    }
  }, [query]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="relative mt-28 md:-mx-2.5">
      <div className="absolute top-0 bottom-0 right-0 my-auto w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>
      <div className="absolute top-0 bottom-0 left-0 my-auto w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>
      <div className="flex justify-between items-center">
        <div
          style={{ backgroundColor: "#66BB6A" }}
          className="text-white px-5 py-3 rounded-lg shadow-md"
        >
          <span className="font-medium text-sm">Balance :</span>
          <span className="font-semibold text-lg"> $RCYCL {100}</span>
        </div>
        <SearchBar
          query={query}
          handleSearch={handleSearch}
          message={"Search NFT Art..."}
        />
      </div>
      <NFTArtSection data={filteredNFTArt} />
    </div>
  );
};

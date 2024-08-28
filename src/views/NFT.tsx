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
    <div className="mt-28 md:-mx-6">
      <SearchBar query={query} handleSearch={handleSearch} />
      <NFTArtSection data={filteredNFTArt} />
    </div>
  );
};

import { useEffect, useState } from "react";
import { SearchBar } from "../components/bar/SearchBar";
import { nftArtList } from "../utils/list";
import { NFTArt } from "../utils/interface";
import { NFTArtCard } from "../components/card/NFTArtCard";
import { PurchaseConfirmationModal } from "../components/modal/PurchaseConfirmationModal";
import { ReusableModal } from "../components/modal/ReusableModal";
import not_found from "../assets/not_found.png";

export const NFT = () => {
  const [query, setQuery] = useState("");
  const [filteredNFTArt, setFilteredNFTArt] = useState<NFTArt[]>([]);

  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openInsufficient, setOpenInsufficient] = useState(false);
  const [choosenIndex, setChoosenIndex] = useState(0);

  const onClick = (tokenId: number) => {
    setOpenConfirmation(true);
    setChoosenIndex(tokenId);
  };

  const onCloseConfirmation = () => {
    setOpenConfirmation(false);
  };

  const onPurchaseConfirmation = () => {
    // user balance
    if (100 < nftArtList[choosenIndex].price) {
      setOpenConfirmation(false);
      setOpenInsufficient(true);
    } else {
      // logic
      setOpenConfirmation(false);
      setOpenSuccess(true);
      setChoosenIndex(0);
    }
  };

  const onCloseInsufficient = () => {
    setOpenInsufficient(false);
  };

  const onCloseSuccess = () => {
    setOpenSuccess(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (nftArtList) {
      const filteredData = nftArtList.filter((nftArt: NFTArt) =>
        nftArt.name.toLocaleLowerCase().includes(query.toLowerCase())
      );
      setFilteredNFTArt(filteredData);
    }
  }, [query]);

  return (
    <div className="relative mt-28 md:mx-10">
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

      <div className="my-12">
        <div className="flex flex-row items-center space-x-4 mb-6">
          <h1 className="font-bold text-3xl text-n-7">All NFT Art</h1>
        </div>
        {filteredNFTArt.length == 0 ? (
          <div className="w-full flex items-center flex-col">
            <img src={not_found} alt="Not Found" className="size-80" />
            <h1 className="text-n-7 font-bold text-3xl"> Data Not Found! </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {filteredNFTArt.map((nftArt) => (
              <NFTArtCard key={nftArt.id} data={nftArt} onPurchase={onClick} />
            ))}
          </div>
        )}
      </div>
      {openConfirmation && (
        <PurchaseConfirmationModal
          onClose={onCloseConfirmation}
          onSubmit={onPurchaseConfirmation}
          header={`Confirm purchase of ${nftArtList[choosenIndex].name} NFT?`}
          content={`This will cost $RCYCL${nftArtList[choosenIndex].price}. Continue?`}
        />
      )}
      {openSuccess && (
        <ReusableModal
          onClose={onCloseSuccess}
          message={"SuccessModal"}
          header={"Purchase Complete!"}
          content={"Your item is now yours!"}
        />
      )}
      {openInsufficient && (
        <ReusableModal
          onClose={onCloseInsufficient}
          message={"InsufficientModal"}
          header={"Insufficient Balance"}
          content={"You do not have enough $RCYCL to complete this purchase."}
        />
      )}
    </div>
  );
};

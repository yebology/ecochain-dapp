import { useEffect, useState } from "react";
import { SearchBar } from "../components/bar/SearchBar";
import { WasteBank } from "../utils/interface";
import { WasteBankSection } from "../components/section/WasteBankSection";
import { getWasteBanks } from "../services/wasteBank";
import { setGlobalState } from "../utils/global";

export const WasteBankView = () => {
  const [query, setQuery] = useState("");
  const [wasteBanks, setWasteBanks] = useState<WasteBank[]>([]);
  const [filteredWasteBank, setFilteredWasteBank] = useState<WasteBank[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getWasteBanks();
        setWasteBanks(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (wasteBanks) {
      const filteredData = wasteBanks.filter(
        (wasteBank: WasteBank) =>
          wasteBank.country.toLocaleLowerCase().includes(query.toLowerCase()) ||
          wasteBank.city.toLocaleLowerCase().includes(query.toLowerCase())
      );
      setFilteredWasteBank(filteredData);
    }
  }, [query, wasteBanks]);

  useEffect(() => {
    if (loading) {
      setGlobalState("loadingModal", "scale-100");
    } 
    else {
      setGlobalState("loadingModal", "scale-0");
    }
  }, [loading]);

  return (
    <div className="relative mt-28 mx-10">
      <div className="absolute top-0 bottom-0 right-0 my-auto w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>
      <div className="absolute top-0 bottom-0 left-0 my-auto w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>

      <SearchBar
        query={query}
        handleSearch={handleSearch}
        message={"Search your location..."}
      />
      <WasteBankSection data={filteredWasteBank} />
    </div>
  );
};

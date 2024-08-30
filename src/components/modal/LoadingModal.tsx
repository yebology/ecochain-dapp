import loading from "../../assets/loading.gif";
import { useGlobalState } from "../../utils/global";

export const LoadingModal = () => {
    const [scale] = useGlobalState("loadingModal")

  return (
    <div
      className={`text-n-7 fixed flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform popup-visible z-50 ${scale}`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex justify-center items-center mt-5">
          <img src={loading} alt="" className="size-48" />
        </div>
        <div className="mt-2">
          <h1 className="text-center font-bold text-xl text-n-7">{"Processing..."}</h1>
          <h2 className="text-center font-normal text-lg text-n-7">
            {"We're on it! This might take a few seconds."}
          </h2>
        </div>
      </div>
    </div>
  );
};

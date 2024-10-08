import React from "react";
import warning from "../../assets/warning.png";
import success from "../../assets/success.png";
import loading from "../../assets/loading.gif";
import insufficient from "../../assets/insufficient.png";
import { truncate } from "../../utils/helper";
import { FaCopy } from "react-icons/fa";

type ReusableModalProps = {
  onClose?: () => void;
  message: string;
  header: string;
  content: string;
  additional?: string;
};

export const ReusableModal: React.FC<ReusableModalProps> = ({
  message,
  onClose,
  header,
  content,
  additional,
}) => {
  const handleCopy = (transactionHash: string) => {
    try {
      navigator.clipboard.writeText(transactionHash);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`text-n-7 fixed flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform popup-visible z-50`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex justify-center items-center mt-5">
          {message == "ErrorModal" && (
            <img src={warning} alt="" className="size-48" />
          )}
            {message == "SwapModal" && (
              <img src={success} alt="" className="size-48" />
            )}
            {message == "SuccessModal" && (
              <img src={success} alt="" className="size-48" />
            )}
          {message == "LoadingModal" && (
            <img src={loading} alt="" className="size-48" />
          )}
          {message == "InsufficientModal" && (
            <img src={insufficient} alt="" className="size-48" />
          )}
        </div>
        <div className="mt-2">
          <h1 className="text-center font-bold text-xl text-n-7">{header}</h1>
          <h2 className="text-center font-normal text-lg text-n-7">
            {content}
          </h2>
          {message == "SwapModal" && additional?.length != 0 && (
            <div className="flex flex-row w-full items-center justify-center space-x-2">
              <h3 className="text-center">
                Track your transaction at{" "}
                <span className="font-bold">
                  {truncate(additional || "", 4, 4, 11)}
                </span>{" "}
              </h3>
              <FaCopy
                onClick={() => handleCopy(additional || "")}
                className="text-gray-500 cursor-pointer"
              />
            </div>
          )}
        </div>
        {message != "LoadingModal" && (
          <button
            onClick={onClose}
            style={{ backgroundColor: "#66BB6A" }}
            className="inline-block w-full px-6 py-2.5 mt-5 text-white font-medium rounded-lg hover:scale-105 duration-200 shadow-md"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

import React from "react";
import question from "../../assets/question.png";

type PurchaseConfirmationModalProps = {
  header: string;
  content: string;
  onClose: () => void;
  onSubmit: () => void;
};

export const PurchaseConfirmationModal: React.FC<
  PurchaseConfirmationModalProps
> = ({ header, content, onClose, onSubmit }) => {
  return (
    <div
      className={`text-n-7 fixed flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform popup-visible z-50`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex justify-center items-center mt-5">
          <img src={question} alt="" className="size-48" />
        </div>
        <div className="mt-2">
          <h1 className="text-center font-bold text-xl text-n-7">
            {header}
          </h1>
          <h2 className="text-center font-normal text-lg text-n-7">
            {content}
          </h2>
        </div>
        <div className="flex flex-row w-full space-x-2">
        <button
          onClick={onSubmit}
          style={{ backgroundColor: "#66BB6A" }}
          className="uppercase inline-block w-full px-6 py-2.5 mt-5 text-white font-medium rounded-lg hover:scale-105 duration-200 shadow-md"
        >
          Confirm
        </button>
          <button
            onClick={onClose}
            className="uppercase bg-red-500 inline-block w-full px-6 py-2.5 mt-5 text-white font-medium rounded-lg hover:scale-105 duration-200 shadow-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

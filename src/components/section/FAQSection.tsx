import React, { useState } from "react";
import { FAQ } from "../../utils/interface";

type FAQSectionProps = {
  data: FAQ[];
};

export const FAQSection: React.FC<FAQSectionProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative mt-10 mb-20 pt-32 mx-10">
      <div className="absolute bottom-0 w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>
      <div className="absolute top-1/4 bottom-0 right-0 w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>
      <div className="flex flex-col text-n-8 lg:px-44">
        <h1 className="text-center text-5xl font-bold mb-2">
          Have{" "}
          <span
            style={{
              background: "linear-gradient(45deg, #2E7D32, #66BB6A, #A5D6A7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {" "}
            Questions ?{" "}
          </span>
        </h1>
        <h5 className="mt-2 text-center text-xl">
          {" "}
          Check out our{" "}
          <span
            style={{
              background: "linear-gradient(45deg, #2E7D32, #66BB6A, #A5D6A7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            FAQ
          </span>{" "}
          section for{" "}
          <span
            style={{
              background: "linear-gradient(45deg, #2E7D32, #66BB6A, #A5D6A7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            answers
          </span>{" "}
          to common queries and helpful
          <span
            style={{
              background: "linear-gradient(45deg, #2E7D32, #66BB6A, #A5D6A7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {" "}
            information
          </span>{" "}
          about our services.
        </h5>
      </div>
      <div className="grid md:grid-cols-1 gap-4 mt-10">
        {data.map((faq, index) => (
          <div
            key={index}
            className="transition-all duration-200 bg-white border border-green-500 rounded-xl shadow-lg cursor-pointer hover:bg-gray-50"
          >
            <button
              onClick={() => handleClick(index)}
              className="flex items-center justify-between w-full px-4 py-5"
            >
              <span className="flex text-lg font-semibold text-black">
                {faq.question}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 text-gray-400 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`px-4 overflow-hidden transition-all ${
                openIndex === index ? "pb-5" : "h-0"
              }`}
            >
              <p className="text-start text-black">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

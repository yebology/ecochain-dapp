import bin from "../../assets/bin.png";
import { whyUsList } from "../../utils/list";

export const WhyUsSection = () => {
  return (
    <div className="my-10 pt-16 relative px-6">
      <div className="absolute my-auto inset-0 w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>
      <div className="absolute top-0 bottom-0 right-0 w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>
      <div className="relative lg:flex lg:items-center lg:gap-36">
        <div className="overflow-hidden hidden w-full lg:flex lg:w-7/12 xl:w-5/12">
          <img src={bin} alt="trash" className="" />
        </div>
        <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
          <h1 className="text-n-8 font-bold text-4xl md:text-6xl lg:text-5xl text-center my-5">
            Why
            <span
              style={{
                background: "linear-gradient(45deg, #2E7D32, #66BB6A, #A5D6A7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}
              Choose{" "}
            </span>
            Us ?
          </h1>
          <div className="grid grid-cols-2 gap-2">
            {whyUsList.map((whyUs, index) => (
              <div key={index} className="w-full">
                <div className="p-7 rounded-xl flex flex-col cursor-pointer duration-500 hover:scale-105 size-44 w-full items-center justify-center">
                  <img className="size-14" src={whyUs.image} alt="" />
                  <div>
                    <h3
                      style={{
                        background:
                          "linear-gradient(45deg, #2E7D32, #66BB6A, #A5D6A7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                      className="text-center text-sm font-bold my-1"
                    >
                      {whyUs.content}
                    </h3>
                    <p className="font-light text-center text-black inline-block text-xs my-1">
                      {whyUs.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

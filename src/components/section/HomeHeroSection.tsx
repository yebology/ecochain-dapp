import trash from "../../assets/trash.png";

export const HomeHeroSection = () => {
  return (
    <div className="pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
      <div className="absolute inset-0 my-auto w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-60 dark:opacity-20"></div>
      <div className="relative lg:flex lg:items-center lg:gap-36">
        <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
          <h1 className="text-n-8 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl">
            Convert Trash into
            <span
              style={{
                background: "linear-gradient(45deg, #2E7D32, #66BB6A, #A5D6A7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}$RCYCL{" "}
            </span>
            and Unlock Unique 
            
            <span
              style={{
                background: "linear-gradient(45deg, #2E7D32, #66BB6A, #A5D6A7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}NFTs
            </span>
          </h1>
          <p className="my-5 text-n-5 dark:text-gray-300 text-md">
            Transform trash into $RCYCL, a digital token that gives value to
            your old stuff. Collect $RCYCL to unlock and own exclusive NFTs.
          </p>
        </div>
        <div className="overflow-hidden hidden w-full lg:flex lg:w-7/12 xl:w-5/12">
          <img src={trash} alt="trash" className=""/>
        </div>
      </div>
    </div>
  );
};

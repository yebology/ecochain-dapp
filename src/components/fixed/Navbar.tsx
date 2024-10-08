import React, { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navList } from "../../utils/list";
import { truncate } from "../../utils/helper";
import { FaWallet } from "react-icons/fa";
import { useWeb3Modal } from "@web3modal/ethers/react";

type NavbarProps = {
  account: string;
};

export const Navbar: React.FC<NavbarProps> = ({ account }) => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const { open } = useWeb3Modal();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className="fixed z-50 top-1 left-1 right-1">
      <div
        className={`rounded-full w-full blur-4xl ${
          openNavigation ? "bg-n-1" : ""
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <h1
            style={{
              background: "linear-gradient(45deg, #2E7D32, #66BB6A, #A5D6A7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            className="block w-[8rem] font-bold text-xl"
          >
            EcoChain
          </h1>

          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navList.map((item, index) => (
                <a
                  style={{
                    background:
                      "linear-gradient(45deg, #2E7D32, #66BB6A, #A5D6A7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  key={index}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-sans text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold z-2 lg:text-n-1 lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>
          <button
            onClick={() => open()}
            className="flex flex-row space-x-2 items-center duration-200 hover:scale-105 bg-primary-green p-3 shadow:lg rounded-xl"
          >
            <FaWallet color="white" />
            <h1 className="font-bold">
              {account ? truncate(account, 4, 4, 11) : "Connect Wallet"}
            </h1>
          </button>
          <button className="ml-auto lg:hidden px-3" onClick={toggleNavigation}>
            <svg
              className="overflow-visible"
              width="20"
              height="12"
              viewBox="0 0 20 12"
            >
              <rect
                className="transition-all origin-center"
                y={openNavigation ? "5" : "0"}
                width="20"
                height="2"
                rx="1"
                fill="white"
                transform={`rotate(${openNavigation ? "45" : "0"})`}
              />
              <rect
                className="transition-all origin-center"
                y={openNavigation ? "5" : "10"}
                width="20"
                height="2"
                rx="1"
                fill="white"
                transform={`rotate(${openNavigation ? "-45" : "0"})`}
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

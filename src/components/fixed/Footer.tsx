import { navList } from "../../utils/list";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-300 -my-4">
      <ul className="text-md flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-5">
        <li
        style={{
            background: "linear-gradient(45deg, #2E7D32, #66BB6A, #A5D6A7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <span>
            ©
            <a
              href="#"
            >
              EcoChain
            </a>{" "}
            2024, All rights reserved.
          </span>
        </li>
        {navList.map((nav, index) => (
          <li key={index}>
            <a
              style={{
                background: "linear-gradient(45deg, #2E7D32, #66BB6A, #A5D6A7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              href={`${nav.url}`}
            >
              {" "}
              {nav.title}{" "}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

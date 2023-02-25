import { useState } from "react";

const FaqTab = ({ question, answer }) => {
  const [activeTab, setActiveTab] = useState(false);
  return (
    <div className="flex justify-start items-start flex-col overflow-hidden w-full">
      <button
        onClick={() => setActiveTab((prev) => !prev)}
        className="transition-all duration-500 bg-[#f3f4f6] hover:brightness-90 flex text-headingColor justify-between items-center w-full min-h-[45px] gap-3 py-3 rounded-md px-5"
      >
        <h4 className=" font-semibold sm:text-base text-sm text-left">
          Q. {question}
        </h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`${
            activeTab ? "rotate-180" : "rotate-0"
          } w-5 h-5 transition-all duration-300`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={`flex ${
          activeTab ? "max-h-[3000px] py-5" : "max-h-0"
        } transition-all duration-700 px-5   justify-start items-start flex-col w-full`}
      >
        <p className="text-headingColor sm:text-base text-sm">A. {answer}</p>
      </div>
    </div>
  );
};

export default FaqTab;

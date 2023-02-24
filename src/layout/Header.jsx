import { useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <div className="fixed z-50 isolate top-0 left-0 wrapper bg-white">
      <header className="contain justify-between h-[86px] items-center gap-2">
        <img src="/logo.png" className="object-contain w-[170px]" alt="" />
        <nav
          className={`flex justify-center items-start gap-4 lg:gap-8 md:static absolute ${
            headerToggle ? "top-full" : "-top-[600px]"
          } px-5 md:p-0 left-0 w-full md:w-auto md:flex-row flex-col md:items-center bg-white py-4 transition-all duration-700 -z-10 md:z-20`}
        >
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-blackEel text-base"
          >
            Courses
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-blackEel text-base"
          >
            Services
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-blackEel text-base"
          >
            Tools
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-blackEel text-base"
          >
            Blog
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-blackEel text-base"
          >
            About us
          </a>
          <button className="text-white font-semibold bg-blueZodiac border-blueZodiac border-2 border-solid hover:bg-transparent hover:text-blueZodiac transition-all duration-300 px-4 md:w-auto w-full py-2 rounded-md">
            Get Started
          </button>
        </nav>
        {headerToggle ? (
          <svg
            onClick={() => setHeaderToggle(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6 md:hidden block cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setHeaderToggle(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6 md:hidden block cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        )}
      </header>
    </div>
  );
};

export default Header;

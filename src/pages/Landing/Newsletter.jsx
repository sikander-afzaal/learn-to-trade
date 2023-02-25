const Newsletter = () => {
  return (
    <div className="wrapper bg-blueZodiac lg:mt-0 mt-10 py-[50px] sm:py-[70px] lg:py-[100px]">
      <div className="contain flex-col justify-center items-start sm:items-center gap-5">
        <h2 className="text-white sm:text-center leading-[1.3] font-semibold title">
          The Moneytize <br /> Newsletter
        </h2>
        <div className="flex justify-start w-full max-w-[410px] items-start text-white gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-sm sm:text-lg">
            Be on our primary list of reading guests
          </p>
        </div>
        <div className="flex justify-start w-full max-w-[410px] items-start text-white gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-sm sm:text-lg">
            Keep in touch with the latest market affairs
          </p>
        </div>
        <div className="flex justify-start w-full max-w-[410px] items-start text-white gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-sm sm:text-lg">
            Don’t miss out on the Moneytize ‘exclusives’
          </p>
        </div>
        <div className="flex justify-start w-full max-w-[410px] items-start text-white gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-sm sm:text-lg">
            Stay on top of the market trading curve
          </p>
        </div>
        <div className="p-4 sm:p-6 bg-[#e5bf5a] sm:w-auto w-full rounded-xl flex justify-start items-center gap-3">
          <label
            htmlFor="email"
            className="text-black md:block hidden font-semibold text-sm"
          >
            Email Address
          </label>
          <form className="flex justify-start flex-col sm:flex-row h-auto sm:h-[38px] rounded-lg gap-4 sm:gap-0 overflow-hidden sm:w-auto w-full items-center">
            <input
              type="email"
              id="email"
              placeholder="eg. charlie@moneytize.ae"
              className="h-full pl-2 outline-none min-h-[38px] w-full sm:w-[320px] rounded-lg sm:rounded-none bg-white text-[#949393] border border-solid border-[#d3d3d3]"
            />
            <button
              type="submit"
              className="h-full bg-blueZodiac min-w-[150px] min-h-[38px] w-full sm:w-auto rounded-lg sm:rounded-none border-1 border-blueZodiac border-solid text-base text-white font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

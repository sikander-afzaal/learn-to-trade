const Mentorship = () => {
  return (
    <div className="wrapper bg-blueZodiac lg:mt-0 mt-10 py-[50px] sm:py-[70px] lg:py-[100px]">
      <div className="contain lg:flex-row flex-col  justify-center items-center gap-10">
        <img
          src="/landing/mentor.jpeg"
          className="object-contain w-full rounded-xl max-w-[533px]"
          alt=""
        />
        <div className="flex justify-start items-start flex-col sm:w-auto w-full gap-4">
          <h2 className="text-white font-semibold title">1:1 Mentorship</h2>
          <p className="text-[#f3f4f6]">Classroom Training l Online Coaching</p>
          <div className="flex justify-start items-start text-white gap-2">
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
              All of the mentor’s time is dedicated to you
            </p>
          </div>
          <div className="flex justify-start items-start text-white gap-2">
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
              Lean mode of 2-day power-packed learning
            </p>
          </div>
          <div className="flex justify-start items-start text-white gap-2">
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
            <p className="text-sm sm:text-lg">Keep it up close and personal</p>
          </div>
          <div className="flex justify-start items-start text-white gap-2">
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
              Become a pro-investor at your pace
            </p>
          </div>
          <div className="flex mt-3 justify-start sm:w-auto w-full  items-center gap-4">
            <button className="text-blueZodiac hover:bg-[#7d87b3] w-full sm:w-auto transition-all duration-200 px-4 py-2 text-base border-none bg-[#c7d2fe] rounded-md font-semibold">
              Enquire now
            </button>
            <button className="text-white text-base border-none bg-transparent w-full sm:w-auto  font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;

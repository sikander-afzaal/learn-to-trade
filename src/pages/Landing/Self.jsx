const Self = () => {
  return (
    <div className="wrapper bg-[#f9fafb] py-[30px] sm:py-[40px] lg:py-[100px]">
      <div className="contain flex-col justify-center items-center gap-2">
        <h2 className="text-[#16225b] title font-semibold">Self Learning</h2>
        <p className="text-textGray text-center">
          Your way to make your learning truly-immediate and always-accessible!
        </p>
        <div className="flex justify-start items-start flex-col mt-8 gap-16 lg:gap-10 w-full">
          <CourseRow
            ico={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            title="Forex"
            url="#"
            courses={[
              {
                img: "/landing/course.jpg",
                time: "10 Hours",
                title: "Forex Trading Course (Beginners)",
                features: [
                  "Introduction to online trading",
                  "The glossary of financial markets",
                  "Technical analysis",
                  "Customized trading plan",
                ],
                price: 500,
              },
              {
                img: "/landing/course.jpg",
                time: "10 Hours",
                title: "Forex Trading Course (Beginners)",
                features: [
                  "Introduction to online trading",
                  "The glossary of financial markets",
                  "Technical analysis",
                  "Customized trading plan",
                ],
                price: 500,
              },
              {
                img: "/landing/course.jpg",
                time: "10 Hours",
                title: "Forex Trading Course (Beginners)",
                features: [
                  "Introduction to online trading",
                  "The glossary of financial markets",
                  "Technical analysis",
                  "Customized trading plan",
                ],
                price: 500,
              },
            ]}
          />
          <CourseRow
            ico={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            title="Crypto"
            url="#"
            courses={[
              {
                img: "/landing/course.jpg",
                time: "10 Hours",
                title: "Forex Trading Course (Beginners)",
                features: [
                  "Introduction to online trading",
                  "The glossary of financial markets",
                  "Technical analysis",
                  "Customized trading plan",
                ],
                price: 500,
              },
              {
                img: "/landing/course.jpg",
                time: "10 Hours",
                title: "Forex Trading Course (Beginners)",
                features: [
                  "Introduction to online trading",
                  "The glossary of financial markets",
                  "Technical analysis",
                  "Customized trading plan",
                ],
                price: 500,
              },
              {
                img: "/landing/course.jpg",
                time: "10 Hours",
                title: "Forex Trading Course (Beginners)",
                features: [
                  "Introduction to online trading",
                  "The glossary of financial markets",
                  "Technical analysis",
                  "Customized trading plan",
                ],
                price: 500,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Self;

const CourseRow = ({ ico, courses, url, title }) => {
  return (
    <div className="flex justify-start items-center lg:items-start flex-col gap-4 w-full">
      <div className="flex justify-center lg:justify-start pb-4 items-center gap-3 border-b border-solid border-[#e5e7eb] w-full">
        <div className="w-[48px] rounded-md aspect-square grid place-items-center bg-[#e5bf5a]">
          {ico}
        </div>
        <h3 className="text-headingColor text-xl font-bold">{title}</h3>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-3 mt-3 w-full">
        {courses.map((elem, idx) => {
          return <Course {...elem} key={idx + new Date()} />;
        })}
      </div>
      <a
        href={url}
        className="text-blueZodiac mt-2 text-base flex justify-start group items-center gap-2"
      >
        Learn More{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3 transition-all duration-300 group-hover:translate-x-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </a>
    </div>
  );
};

const Course = ({ img, title, time, price, features }) => {
  return (
    <div className="flex justify-start max-w-[400px] hover:shadow-boxHover cursor-pointer transition-shadow duration-200 p-3 items-start flex-col gap-3 w-full rounded-xl ">
      <div className="relative w-full">
        <div className="absolute top-3 left-3 rounded-md bg-[rgba(255,255,255,0.9)] flex justify-center items-center gap-1 p-2 text-white">
          <p className="text-base text-textGray">AED</p>
          <p className="text-base font-semibold text-[#b91c1c]">{price}</p>
        </div>
        <img
          src={img}
          className="object-cover rounded-xl w-full h-[160px]"
          alt=""
        />
      </div>
      <h4 className="text-lg font-semibold text-headingColor">{title}</h4>
      <button className="text-white font-semibold bg-blueZodiac border-blueZodiac border-2 border-solid hover:bg-transparent w-full  hover:text-blueZodiac transition-all duration-300 px-4  py-2 rounded-md">
        Buy Course
      </button>
      <div className="flex justify-start items-center gap-2 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#666"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-textGray text-base ">{time}</p>
      </div>
      <div className="flex justify-start items-start flex-col gap-1 w-full">
        {features.map((elem, idx) => {
          return (
            <div
              key={idx + new Date()}
              className="flex justify-start items-center gap-2 w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#666"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p className="text-textGray text-base ">{elem}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

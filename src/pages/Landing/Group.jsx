const Group = () => {
  return (
    <div className="wrapper py-[30px] sm:py-[40px] lg:py-[100px]">
      <div className="contain flex-col justify-center items-center gap-2">
        <h2 className="text-[#16225b] title font-semibold">Group Classes</h2>
        <p className="text-textGray text-center">
          Fun way to learn with the co-community of trading enthusiasts in the
          region.
        </p>
        <div className="grid place-items-center grid-cols-1 xl:grid-cols-3 w-full mt-8 gap-5">
          <GroupCourse
            img="/landing/course.jpg"
            date={{ month: "MAR", day: 4 }}
            title="Forex Trading Course (Beginners)"
            desc="4 Days (Sa,Su) (11:00 am-2:00 pm)"
            price={2569}
          />
          <GroupCourse
            img="/landing/course.jpg"
            date={{ month: "MAR", day: 4 }}
            title="Forex Trading Course (Beginners)"
            desc="4 Days (Sa,Su) (11:00 am-2:00 pm)"
            price={2569}
          />
          <GroupCourse
            img="/landing/course.jpg"
            date={{ month: "MAR", day: 4 }}
            title="Forex Trading Course (Beginners)"
            desc="4 Days (Sa,Su) (11:00 am-2:00 pm)"
            price={2569}
          />
        </div>
      </div>
    </div>
  );
};

export default Group;

const GroupCourse = ({ img, date: { month, day }, title, desc, price }) => {
  return (
    <div className="flex justify-start max-w-[400px] hover:shadow-boxHover cursor-pointer transition-shadow duration-200 p-3 items-start flex-col gap-2 w-full rounded-xl ">
      <div className="relative w-full">
        <div className="absolute top-3 left-3 rounded-md bg-[rgba(0,0,0,0.6)] flex justify-center items-center gap-1 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>Forex</p>
        </div>
        <img
          src={img}
          className="object-cover rounded-xl w-full h-[160px]"
          alt=""
        />
      </div>
      <div className="flex justify-between items-start gap-5 w-full ">
        <h4 className="text-lg font-semibold text-headingColor">{title}</h4>
        <div className="flex justify-center mr-6 items-center bg-white rounded-md min-w-[72px] aspect-square overflow-hidden flex-col shadow-shadow1 -translate-y-1/2">
          <p className="text-white uppercase w-full font-medium text-sm grid place-items-center bg-[#dc2626] min-h-[26px]">
            {month}
          </p>
          <p className="text-headingColor font-medium text-2xl grid place-items-center  h-full">
            {day}
          </p>
        </div>
      </div>
      <button className="text-white font-semibold bg-blueZodiac border-blueZodiac border-2 border-solid hover:bg-transparent w-full -mt-4 hover:text-blueZodiac transition-all duration-300 px-4  py-2 rounded-md">
        Enroll Now
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
        <p className="text-textGray text-base ">{desc}</p>
      </div>
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
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
          />
        </svg>
        <p className="text-textGray text-base ">
          AED <span className="font-bold text-headingColor">{price}</span>
        </p>
      </div>
    </div>
  );
};

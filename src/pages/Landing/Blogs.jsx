const Blogs = () => {
  return (
    <div className="wrapper py-[30px] sm:py-[40px] lg:py-[100px]">
      <div className="contain flex-col justify-center items-center gap-2">
        <h2 className="text-[#16225b] title font-semibold">Blogs</h2>
        <p className="text-textGray text-center">
          Trading digest for latest news, market insights, and investment tips
          from experts
        </p>
        <div className="grid place-items-center grid-cols-1 xl:grid-cols-3 w-full mt-8 gap-5">
          <BlogBox
            banner="/landing/course.jpg"
            userImg="/landing/review-test.png"
            name="Nikkhil Malhotra"
            date="February 21, 2023"
            title="Why You Should Know More About Bitcoin?"
          />
          <BlogBox
            banner="/landing/course.jpg"
            userImg="/landing/review-test.png"
            name="Nikkhil Malhotra"
            date="February 21, 2023"
            title="Why You Should Know More About Bitcoin?"
          />
          <BlogBox
            banner="/landing/course.jpg"
            userImg="/landing/review-test.png"
            name="Nikkhil Malhotra"
            date="February 21, 2023"
            title="Why You Should Know More About Bitcoin?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;

const BlogBox = ({ banner, title, userImg, name, date }) => {
  return (
    <div className="flex justify-start max-w-[400px] hover:shadow-boxHover cursor-pointer transition-shadow duration-200 p-3 items-start flex-col gap-3 w-full rounded-xl ">
      <img
        src={banner}
        className="object-cover rounded-xl w-full h-[160px]"
        alt=""
      />
      <h4 className="text-lg font-semibold text-headingColor">{title}</h4>
      <div className="flex justify-start items-center w-full gap-3">
        <img
          src={userImg}
          className="w-[40px] aspect-square rounded-full"
          alt=""
        />
        <div className="flex justify-start items-start flex-col gap-1">
          <h5 className="text-headingColor text-base font-normal">{name}</h5>
          <h5 className="text-textGray text-base font-normal">{date}</h5>
        </div>
      </div>
    </div>
  );
};

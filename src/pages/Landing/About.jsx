const About = () => {
  return (
    <div className="bg-[#f9fafb] py-[30px] sm:py-[40px] lg:py-[100px] wrapper">
      <div className="contain justify-between lg:flex-row flex-col items-center lg:items-start gap-8 sm:gap-10">
        <AboutBox
          img="/landing/about1.svg"
          title="Pioneering course platform"
          desc="Comprehensive course structure designed for faster adoption and easy learning at any stage of trading."
        />
        <AboutBox
          img="/landing/about2.svg"
          title="Trade-veteran himself"
          desc="Nikkhil brings his 10+ years of proven investment strategy and trade analysis experience on deck."
        />
        <AboutBox
          img="/landing/about3.svg"
          title="Loved by people"
          desc="Top-rated mentoring programs and sessions reviewed all-star by investors and traders."
        />
      </div>
    </div>
  );
};

export default About;

const AboutBox = ({ img, title, desc }) => {
  return (
    <div className="flex justify-start max-w-[675px] items-center text-center sm:text-left sm:items-start flex-col w-full">
      <img
        src={img}
        className="object-contain max-w-[378px] w-full sm:aspect-square self-center"
        alt=""
      />
      <h3 className="text-lg text-headingColor mb-1 font-bold ">{title}</h3>
      <p className="text-base text-textGray">{desc}</p>
    </div>
  );
};

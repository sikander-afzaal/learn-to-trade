const Hero = () => {
  return (
    <div className="wrapper mt-[86px] py-16 sm:p-0 sm:min-h-[800px] bg-landingHero relative gap-10 isolate bg-cover bg-center">
      <div className="absolute inset-0 -z-10 bg-black opacity-70"></div>
      <h2 className="contain h-full sm:mt-[100px] sm:text-left text-center justify-center sm:justify-start lg:mt-[200px] text-white text-[25px] sm:text-[40px] lg:text-[60px] font-semibold">
        ONE-TO-ONE MENTORING
      </h2>
      <div className="contain justify-start items-start flex-col gap-5 sm:absolute bottom-0 sm:py-7">
        <h3 className="text-white font-normal text-lg sm:text-left text-center self-center sm:self-start sm:text-xl">
          Book a Free Forex Trading Workshop
        </h3>
        <form className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 auto-rows-fr xl:flex w-full justify-between items-center gap-4">
          <input
            name="firstName"
            placeholder="First Name"
            className="w-full min-w-[161px] h-[40px] bg-white border-[#29abe2] border-solid border-[3px] text-[#555] pl-2 text-sm"
            type="text"
          />
          <input
            name="lastName"
            placeholder="Last Name"
            className="w-full min-w-[161px] h-[40px] bg-white border-[#29abe2] border-solid border-[3px] text-[#555] pl-2 text-sm"
            type="text"
          />
          <input
            name="email"
            placeholder="Email"
            className="w-full min-w-[161px] h-[40px] bg-white border-[#29abe2] border-solid border-[3px] text-[#555] pl-2 text-sm"
            type="email"
          />
          <input
            name="phone"
            placeholder="Phone/SMS"
            className="w-full min-w-[161px] h-[40px] bg-white border-[#29abe2] border-solid border-[3px] text-[#555] pl-2 text-sm"
            type="tel"
          />
          <select
            name="region"
            placeholder="Phone/SMS"
            className="w-full min-w-[161px] h-[40px] bg-white border-[#29abe2] border-solid border-[3px] text-[#555] pl-2 text-sm"
            type="tel"
          >
            <option value="select">Select Region</option>
            <option value="select">Australia</option>
          </select>
          <button className="sm:col-span-3 lg:col-span-5 uppercase bg-[#5cb85c] w-full min-w-[161px] text-xl font-bold h-[40px] text-white border-none">
            BOOK NOW
          </button>
        </form>
        <p className="text-xs text-white leading-[1.5]">
          By clicking BOOK NOW you agree to the use of the above information as
          described in the{" "}
          <span className="text-[#337ab7]">
            Learn to Trade Group’s Privacy Policy.
          </span>{" "}
          <br />
          You may receive communications from Learn to Trade and its Partner
          Companies, including Smart Charts, about future events and products
          and services. <br /> You can of course change your preferences and
          unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Hero;

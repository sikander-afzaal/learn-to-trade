const Footer = () => {
  return (
    <div className="bg-footer wrapper pb-7 pt-[80px]">
      <footer className="contain flex-col justify-start items-start gap-8 sm:gap-16">
        <div className="flex w-full sm:flex-row flex-col justify-between items-start gap-3">
          <img src="/logo.png" className="w-[210px] object-contain " alt="" />
          <div className="flex justify-start items-start flex-col gap-3">
            <h4 className="text-sm text-[#16225b] font-semibold">
              Quick Links
            </h4>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              Courses
            </a>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              Group classes
            </a>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              One-on-one
            </a>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              Our blog
            </a>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              FAQs
            </a>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              Tools
            </a>
          </div>
          <div className="flex justify-start items-start flex-col gap-3">
            <h4 className="text-sm text-[#16225b] font-semibold">
              Terms & Policies
            </h4>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              Privacy Policy
            </a>
          </div>
          <div className="flex justify-start items-start flex-col gap-3">
            <h4 className="text-sm text-[#16225b] font-semibold">Company</h4>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              About us
            </a>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              Contact us
            </a>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              WhatsApp us
            </a>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              Linkedin
            </a>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              Instagram
            </a>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              Facebook
            </a>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              Twitter
            </a>
            <a href="#" className="text-[#16225b] text-sm hover:underline">
              YouTube
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-[#16225b] text-sm">
            © 2022 <strong>Moneytize LLC</strong>
          </p>
          <p className="text-[#16225b] text-sm">
            ‍We run on <strong>Classcard</strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

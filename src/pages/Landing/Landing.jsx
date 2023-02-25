import About from "./About";
import Blogs from "./Blogs";
import Faq from "./Faq";
import Group from "./Group";
import Hero from "./Hero";
import Mentorship from "./Mentorship";
import Self from "./Self";
import Testimonials from "./Testimonials";

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <Group />
      <Mentorship />
      <Self />
      <Testimonials />
      <Faq />
      <Blogs />
    </>
  );
};

export default Landing;

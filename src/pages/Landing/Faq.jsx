import FaqTab from "../../components/FaqTab";

const Faq = () => {
  return (
    <div className="wrapper bg-[#f9fafb] py-[30px] sm:py-[40px] lg:py-[100px]">
      <div className="contain flex-col justify-center items-center gap-8">
        <h2 className="title text-[#16225b] font-semibold">FAQs</h2>
        <div className="max-w-[700px] flex-col flex justify-start items-center w-full gap-2 mt-2 sm:mt-4">
          <FaqTab
            question="How much time does it take to learn to trade?"
            answer="Every trading course has its timeline depending on the span and depth of the topics and the level of expertise it caters to. Further, as you learn about it theoretically, procedurally, or through live-action, you need to practice it in routine to get hands-on expertise in it."
          />
          <FaqTab
            question="How much time does it take to learn to trade?"
            answer="Every trading course has its timeline depending on the span and depth of the topics and the level of expertise it caters to. Further, as you learn about it theoretically, procedurally, or through live-action, you need to practice it in routine to get hands-on expertise in it."
          />
          <FaqTab
            question="How much time does it take to learn to trade?"
            answer="Every trading course has its timeline depending on the span and depth of the topics and the level of expertise it caters to. Further, as you learn about it theoretically, procedurally, or through live-action, you need to practice it in routine to get hands-on expertise in it."
          />
          <FaqTab
            question="How much time does it take to learn to trade?"
            answer="Every trading course has its timeline depending on the span and depth of the topics and the level of expertise it caters to. Further, as you learn about it theoretically, procedurally, or through live-action, you need to practice it in routine to get hands-on expertise in it."
          />
          <FaqTab
            question="How much time does it take to learn to trade?"
            answer="Every trading course has its timeline depending on the span and depth of the topics and the level of expertise it caters to. Further, as you learn about it theoretically, procedurally, or through live-action, you need to practice it in routine to get hands-on expertise in it."
          />
          <FaqTab
            question="How much time does it take to learn to trade?"
            answer="Every trading course has its timeline depending on the span and depth of the topics and the level of expertise it caters to. Further, as you learn about it theoretically, procedurally, or through live-action, you need to practice it in routine to get hands-on expertise in it."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;

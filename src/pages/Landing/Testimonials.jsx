const Testimonials = () => {
  return (
    <div className="wrapper py-[30px] sm:py-[40px] lg:py-[100px]">
      <div className="contain flex-col justify-center items-center gap-5">
        <h2 className="title text-[#16225b] font-semibold">Testimonials</h2>
        <div className="w-full mt-6 xl:flex-row flex-col flex gap-5 justify-start items-start ">
          <div className=" gap-4 flex justify-start items-start flex-col w-full">
            <ReviewBox
              review=" I have actually enjoyed the course it focused more on practical things
        rather than theories. What i love mostly is that is showed me how to
        combine instruments to create strategies. I am now more cable and i do
        actually understand entry and exact points. The calculations are much
        more understandable as well. The course was really enjoyable. I enjoyed
        it a lot i would definitely get level 2 after a bit more practice on all
        the things that we took on course 1"
              img="/landing/review-test.png"
              name="Rodha Al Haj"
            />
            <ReviewBox
              review=" I have actually enjoyed the course it focused more on practical things
        rather than theories. What i love mostly is that is showed me how to
        combine instruments to create strategies. I am now more cable and i do
        actually understand entry and exact points. The calculations are much
        more understandable as well. The course was really enjoyable. I enjoyed
        it a lot i would definitely get level 2 after a bit more practice on all
        the things that we took on course 1"
              img="/landing/review-test.png"
              name="Rodha Al Haj"
            />
            <ReviewBox
              review="I studied forex beginner course here in moneytize and then forex intermediate level course as well...Whatever you say is less about Nikkhil sir...he teaches you with so much perfection that you go home and start applying the same strategies in the live market...Nikkhil sir teaching gives learning and confidence to become a successful trader... Even after the course whatever doubts you have Nikkhil sir always come forward and guide you.... Perfect teaching and perfect teacher .... I will always be very thankful to Nikkhil sir and the team for so much support 🙏... Highly recommended 👍..no doubt"
              img="/landing/review-test.png"
              name="Rodha Al Haj"
            />
            <ReviewBox
              review="I found the courses very easy to understand. The teacher explained in a simple way, and it helped me to clarify all my doubts in trading and feel free to ask any questions that I had.. I am more confident in trading now. Truly recommend Moneytize Courses!"
              img="/landing/review-test.png"
              name="Rodha Al Haj"
            />
          </div>
          <div className=" gap-4  flex justify-start items-start flex-col w-full">
            <ReviewBox
              review="This is my level 2 with Moneytize and once again team Moneytize proved to be worth the experience. Me as a beginner started off with Level 1, with Nikhil sir's support and guidance, I was able to successfully kick start my trading journey. Level 2 had in-depth insights and now I have the confidence to place my trades based on price action. Thanks to Nikhil Sir, I was able to opt for a $ 50k MFF prop firm-funded account and pass phase 2 in 4 days (12 trades) looking forward to enrolling in Level 3!!!"
              img="/landing/review-test.png"
              name="Rodha Al Haj"
            />
            <ReviewBox
              review="My journey overall with the Forex Trading Course has been Interesting Knowledgeable and most importantly PROFITABLE!! After my first and second level courses I went back to practice what I had learned in class, honestly speaking as I have a background in forex trading, level 1 wasn’t that profitable and only knowledgeable as it was the basics being taught but when it came to level 2 my whole trading strategy and technique changed for the best. I got an 80% success rate with the level 2 techniques I had learned which encouraged me to come for the level 3 advanced courses. Looking at level 3, it will need practice as “practice makes perfect” but I can say that once you master all the strategies and techniques you learn from Mr. Nikkhil at Moneytize from levels 1 - 3, you can be one successful trader with a success rate of 80 - 90%"
              img="/landing/review-test.png"
              name="Rodha Al Haj"
            />
            <ReviewBox
              review="This is my level 2 with Moneytize and once again team Moneytize proved to be worth the experience. Me as a beginner started off with Level 1, with Nikhil sir's support and guidance, I was able to successfully kick start my trading journey. Level 2 had in-depth insights and now I have the confidence to place my trades based on price action. Thanks to Nikhil Sir, I was able to opt for a $ 50k MFF prop firm-funded account and pass phase 2 in 4 days (12 trades) looking forward to enrolling in Level 3!!!"
              img="/landing/review-test.png"
              name="Rodha Al Haj"
            />
          </div>
          <div className=" gap-4  flex justify-start items-start flex-col w-full">
            <ReviewBox
              review="Once again Nikkhil blew my mind during the level 2 course with very advanced knowledge and techniques. Although the techniques are very complex Nikkhil explained them in a very easy and clear way. Given homework assignments are perfect way to learn through my own mistakes and keep myself on track. I really enjoy learning with this excellent teacher and will come back for level 3 soon."
              img="/landing/review-test.png"
              name="Rodha Al Haj"
            />
            <ReviewBox
              review="People think that good traders are like psycho, don’t have feelings bla bla bla. Here at Moneytize we learn to build an efficient algorithm that INCREASES the probability for every trade we make, we learn to do it and there is no place for emotions. Just math and analysis"
              img="/landing/review-test.png"
              name="Rodha Al Haj"
            />
            <ReviewBox
              review=" I have actually enjoyed the course it focused more on practical things
        rather than theories. What i love mostly is that is showed me how to
        combine instruments to create strategies. I am now more cable and i do
        actually understand entry and exact points. The calculations are much
        more understandable as well. The course was really enjoyable. I enjoyed
        it a lot i would definitely get level 2 after a bit more practice on all
        the things that we took on course 1"
              img="/landing/review-test.png"
              name="Rodha Al Haj"
            />
            <ReviewBox
              review="I studied forex beginner course here in moneytize and then forex intermediate level course as well...Whatever you say is less about Nikkhil sir...he teaches you with so much perfection that you go home and start applying the same strategies in the live market...Nikkhil sir teaching gives learning and confidence to become a successful trader... Even after the course whatever doubts you have Nikkhil sir always come forward and guide you.... Perfect teaching and perfect teacher .... I will always be very thankful to Nikkhil sir and the team for so much support 🙏... Highly recommended 👍..no doubt"
              img="/landing/review-test.png"
              name="Rodha Al Haj"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const ReviewBox = ({ img, name, review }) => {
  return (
    <div className="flex w-full h-max  justify-start items-start flex-col gap-4 bg-[#f9fafb] rounded-xl p-3">
      <p className="text-textGray text-base leading-[1.5]">{review}</p>
      <div className="flex justify-start items-center gap-3">
        <img
          src={img}
          className="rounded-full object-cover w-[40px] aspect-square"
          alt=""
        />
        <h5 className="text-headingColor text-base ">{name}</h5>
      </div>
    </div>
  );
};

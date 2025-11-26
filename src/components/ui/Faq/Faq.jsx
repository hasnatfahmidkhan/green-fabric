import Heading from "@/components/Heading";
import React from "react";

const Faq = () => {
  const questions = [
    {
      ques: "What materials are used in your t-shirts?",
      ans: "All our t-shirts are made from 100% organic cotton, certified by international standards. We use eco-friendly dyes that are safe for both people and the environment.",
    },
    {
      ques: "How long does shipping take?",
      ans: "Standard shipping takes 5-7 business days. We also offer expedited 2-3 day shipping and international options.",
    },
    {
      ques: "What materials are used in your t-shirts?",
      ans: "All our t-shirts are made from 100% organic cotton, certified by international standards. We use eco-friendly dyes that are safe for both people and the environment.",
    },
    {
      ques: "What is the return and exchange policy?",
      ans: "We offer a 30-day return or exchange policy on all unworn and unwashed items. Simply contact our support team with your order number to initiate the process. Sale items may be subject to different conditions.",
    },
    {
      ques: "Are your t-shirts Fair Trade Certified?",
      ans: "Yes! We are proud to be **Fair Trade Certified**, ensuring that our workers receive fair wages, safe working conditions, and community development funds. This means every purchase supports ethical labor practices.",
    },
    {
      ques: "How should I care for my organic cotton t-shirt?",
      ans: "To maintain the quality and minimize environmental impact, machine wash cold with like colors, and tumble dry low or hang dry. Avoid using bleach, and iron on a low setting if needed.",
    },
  ];
  return (
    <div>
      <div className="flex items-start mb-6">
        <Heading>Frequently Asked Questions</Heading>
      </div>
      <div className="space-y-4">
        {questions?.map((q, i) => (
          <div
            key={i}
            className="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input
              type="radio"
              name="my-accordion-2"
              defaultChecked={i === 0}
            />
            <div className="collapse-title font-semibold">{q.ques}</div>
            <div className="collapse-content text-sm">{q.ans}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

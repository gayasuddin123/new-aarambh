import { useState } from "react";

const faqs = [
  {
    question: "What is Aarambh?",
    answer: "Aarambh is a platform that connects...",
  },
  {
    question: "What resources does Aarambh offer?",
    answer: "Aarambh offers various...",
  },
  {
    question: "Is Aarambh free to use?",
    answer: "Yes, Aarambh is completely free...",
  },
  {
    question: "Can I contribute to Aarambh?",
    answer: "Yes, you can contribute...",
  },
  {
    question: "How can I contact the Aarambh team?",
    answer: "You can contact the team via...",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" z-20 text-white min-h-screen relative top-0 flex items-center justify-center">
      <div className="w-full max-w-5xl p-5 b">
        <h2 className="text-center text-4xl mb-12 font-Orbitron font-bold tracking-wide">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 ">
          <div className="bg-gradient-to-r from-[#56C59659] to-[#25232359] rounded-md p-6">
          {faqs.map((faq, index) => (
            <div className="">
            <div key={index} className="">
              <button
                className="w-full p-4 text-left  flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl md:text-3xl font-Exo">{faq.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-800 rounded-md">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
            <div className="w-full h-1 bg-green-600 rounded-md"></div>
            </div>
            
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

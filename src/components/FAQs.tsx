import React, { useState, useEffect } from 'react';
import faqsData from '../assets/faqs.json'; // Import JSON file

// Define the FAQ type
type FAQ = {
  question: string;
  answer: string;
};

const FAQs = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]); // Type the state as an array of FAQ objects
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setFaqs(faqsData as FAQ[]); // Cast the imported data to the FAQ type
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-emerald-950 mb-4">Frequently Asked Questions</h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-lime-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full md:w-2/3 lg:w-1/2 mb-6">
              <div
                onClick={() => toggleFAQ(index)}
                className="p-4 cursor-pointer bg-emerald-100 hover:bg-lime-100 transition-colors rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-emerald-950">
                  {faq.question} {/* No more type errors here */}
                </h2>
                <div className={`mt-2 text-gray-600 ${openIndex === index ? 'block' : 'hidden'}`}>
                  {faq.answer} {/* No more type errors here */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

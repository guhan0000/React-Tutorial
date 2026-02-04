import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    { question: "What is React", answer: "React is a Javascript Library" },
    { question: "What is Java", answer: "Java is a Programming Language" },
    { question: "What is SQL", answer: "SQL is a RDBMS Language" },
  ];
  const toggleAccordian = (index) => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
  };
  return (
    <div className="container">
      <h1>Accordian</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="border mb-2 rounded p-2">
          <div
            className="justify-content-between align-items-center d-flex"
            style={{ cursor: "pointer" }}
            onClick={()=>{toggleAccordian(index)}}
          >
            <strong>
              <p>{faq.question}</p>
            </strong>
            <span>{index === activeIndex ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <strong>
              <p>{faq.answer}</p>
            </strong>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

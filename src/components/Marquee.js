import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectQuotes } from "../redux/quotesSlice";

const Marquee = () => {
  const quotes = useSelector(selectQuotes);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Show each quote for 5 seconds
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="relative overflow-hidden bg-gray-200 h-10 flex items-center rounded-lg ">
      <div
        key={currentQuoteIndex} // Change key to trigger animation
        className="absolute w-full whitespace-nowrap text-center animate-scroll "
      >
        <span className="text-lg">{quotes[currentQuoteIndex]}</span>
      </div>
    </div>
  );
};

export default Marquee;

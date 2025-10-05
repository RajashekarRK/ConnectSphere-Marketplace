
import React, { useState } from 'react';

interface CarouselProps {
  items: React.ReactNode[];
  title: string;
}

const Carousel: React.FC<CarouselProps> = ({ items, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? items.length - 1 : curr - 1));
  };
  const next = () => {
    setCurrentIndex((curr) => (curr === items.length - 1 ? 0 : curr + 1));
  };
  
  if (items.length === 0) {
      return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
      <div className="relative overflow-hidden bg-white rounded-xl shadow-lg p-4">
        <div 
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
        {items.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white pointer-events-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                </button>
                <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white pointer-events-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;

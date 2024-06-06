import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (slides.length === 0) {
    return <div className="slider">No slides available</div>;
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <button onClick={goToPrevious} className="arrow left">❮</button>
      <div className="slide" style={{ backgroundImage: `url(${slides[currentIndex]})` }}></div>
      <button onClick={goToNext} className="arrow right">❯</button>
    </div>
  );
};

export default Slider;

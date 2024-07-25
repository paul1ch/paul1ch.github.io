import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import '../styles/ScrollToTopButton.css'; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`} 
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;

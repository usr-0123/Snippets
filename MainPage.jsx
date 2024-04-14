import React from 'react';

const MainPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling behavior
    });
  };

  return (
    <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      Scroll To Top
    </button>
  );
};

export default MainPage;

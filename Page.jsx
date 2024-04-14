import React from 'react';

const Page = () => {
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15); // Adjust speed here (500 is duration in ms)
    
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // Lower interval gives smoother animation
  };

  return (
    <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      Scroll To Top
    </button>
  );
};

export default Page;

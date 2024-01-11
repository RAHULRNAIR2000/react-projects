import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent = () => {
  useEffect(() => {
    
    // Initialize ScrollReveal
    ScrollReveal({ distance: '30px', easing: 'ease-in' });

    // Reveal .title element
    ScrollReveal().reveal('.title', {
      delay: 300,
      origin: 'top',
    });

    // Reveal .paragraph element
    ScrollReveal().reveal('.paragraph', {
      delay: 800,
      origin: 'top',
    });

    // Clean up ScrollReveal instance on component unmount
    return () => {
      ScrollReveal().destroy();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      {/* You can include any additional JSX for this component */}
    </div>
  );
};

export default ScrollRevealComponent;

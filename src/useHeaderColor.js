import { useState, useEffect } from 'react';

const useHeaderColor = () => {
  const [headerColor, setHeaderColor] = useState('cyan'); // Default color

  const handleScroll = () => {
    const sectionElements = document.querySelectorAll('section'); // Assuming your sections are wrapped in <section> tags
    let currentColor = 'cyan'; // Default color

    sectionElements.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
        switch (section.id) {
          case 'section1':
            currentColor = '#ff0000'; // Red
            break;
          case 'section2':
            currentColor = '#00ff00'; // Green
            break;
          case 'section3':
            currentColor = '#0000ff'; // Blue
            break;
          default:
            currentColor = '#000'; // Default color
        }
      }
    });

    setHeaderColor(currentColor);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return headerColor;
};

export default useHeaderColor;

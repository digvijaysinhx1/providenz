import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Footer = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const logo = logoRef.current;

    gsap.fromTo(
      logo,
      { y: '100%' },
      {
        y: '0%',
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-center">
            <div className="footer-logo-container" style={{ overflow: 'hidden' }}>
              <h2 ref={logoRef} className="heading2 footer-logo">
                PROVIDENZ<span className="footer-trademark">®</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

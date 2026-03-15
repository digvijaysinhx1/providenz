import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cube from '../assets/images/cube-parallel-x.png';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const About = () => {
  const container = useRef();
  const paraRef = useRef();
  const cubeRef = useRef();

  useGSAP(() => {
    const isMobile = window.innerWidth <= 600;

    // ✅ text animation — desktop only
    if (!isMobile) {
      const split = new SplitText(paraRef.current, {
        type: 'words,chars',
        wordsClass: 'word',
        charsClass: 'char',
      });

      gsap.set(split.chars, { opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 10%',
          end: 'top -50%',
          pin: true,
          scrub: 2,
          // markers: true,
        },
      });

      tl.to(split.chars, {
        color: '#f0f0f0',
        stagger: 0.05,
        ease: 'none',
      });
    }

    // ✅ cube parallax — runs on both mobile and desktop
    gsap.to(cubeRef.current, {
      y: -300,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, { scope: container });

  return (
    <div id='about' className='about' ref={container} style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Cube */}
      <div
        ref={cubeRef}
        style={{
          position: 'absolute',
          right: '2%',
          top: '30%',
          transform: 'translateY(-50%)',
          width: 'clamp(260px, 38vw, 520px)',
          opacity: 0.15,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <img src={cube} alt="" style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 0 40px rgba(255, 73, 37, 0.8))' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="about-wrapper relative px-2 pt-37">
          <div className="about-content flex flex-col items-start justify-center gap-5 text-left">
            <div className="about-heading">
              <h2 className="small">{"("}ABOUT{")"}</h2>
            </div>
            <div className="about-para">
              <p ref={paraRef} className='text-wrap'>We combine thoughtful design and precise development
                to craft websites that are both beautiful and effective.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
import React from "react";
import { useState, useEffect } from "react";
import HeroVid from "../assets/videos/hero-bg-video.mp4";
import StartProject from "../components/ui/StartProject";

const words = ["Websites", "Brands", "Reality", "Design"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState("visible"); // "visible" | "exit" | "enter"

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Exit upward
      setStage("exit");

      setTimeout(() => {
        // 2. Instantly reposition to bottom (no transition)
        setStage("enter");
        setIndex((i) => (i + 1) % words.length);

        // 3. Slide up to visible
        setTimeout(() => {
          setStage("visible");
        }, 30); // tiny delay so browser registers the "enter" position first
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="/" className="hero relative h-screen text-[#f1f1f1] bg-[#0D0D0D] overflow-hidden">
      <div className="container">
        {/* video */}
        <div className="absolute inset-0">
          <video
            src={HeroVid}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center opacity-[0.85] grayscale pointer-events-none"
          />
        </div>

        {/* side fade overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0D0D0D] via-transparent to-[#0D0D0D]"></div>

        {/* content */}

        <div className="hero-wrapper pb-37 relative pt-18 h-screen px-2 flex flex-col md:justify-center items-start justify-between">
          <div className="available md:hidden flex items-center justify-center flex-row gap-3"> 
            <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 solid-dot"></span>
            </div> 
            <p>
            Available for Project
            </p>
            </div>
          <div className="hero-content-cta flex flex-col items-start gap-6 md:gap-10">
            <div className="hero-content flex flex-col gap-2 md:gap-4">
              <div className="hero-heading">
                <h1 className="heading1 ">
                  We turn ideas
                  <br /> into{" "}
                  <span
                    className="text-[#FF4925]"
                    style={{
                      display: "inline-block",
                      transition:
                        stage === "enter"
                          ? "none"
                          : "opacity 0.2s ease, transform 0.2s ease",
                      opacity: stage === "visible" ? 1 : 0,
                      transform:
                        stage === "exit"
                          ? "translateY(-20px)" // exits upward
                          : stage === "enter"
                            ? "translateY(70px)" // starts from below
                            : "translateY(0)", // rests in place
                    }}
                  >
                    {words[index]}
                  </span>
                </h1>
              </div>
              <div className="hero-sub-heading">
                <p>We design and build modern websites that help brands stand out and grow online.</p>
              </div>
            </div>
            <div className="hero-cta"><StartProject link="#cta" text="START A PROJECT"/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

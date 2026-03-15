import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    number: "1",
    title: "Discovery Phase",
    description:
      "Understanding your goals, pain points, audience, and what sets you apart.",
  },
  {
    number: "2",
    title: "Project Kickoff",
    description:
      "Setting up projects, aligning on scope and milestones, and diving into the work.",
  },
  {
    number: "3",
    title: "Receive & Refine",
    description:
      "Sharing initial designs, gathering feedback, and fine‑tuning together.",
  },
  {
    number: "4",
    title: "Continue & Grow",
    description:
      "Launching with confidence and supporting your next extraordinary moves.",
  },
];

const Process = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current;
        const section = sectionRef.current;

        // How much to scroll: track full width minus the one visible viewport width
        const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

        gsap.to(track, {
          x: getScrollAmount,   // negative → slides LEFT, revealing cards on the right
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 0",
            end: "top -40%",
            pin: true,
            scrub: 2,
            anticipatePin: 2,
            invalidateOnRefresh: true,
            // markers: true,
          },
        });

        return () => {
          ScrollTrigger.getAll().forEach((st) => {
            if (st.trigger === section) st.kill();
          });
        };
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="services" className="process-section">
      {/*
        Single flex-row track that contains BOTH the heading column
        AND all 4 card columns. The whole strip scrolls together.
      */}
      <div ref={trackRef} className="process-track">

        {/* ── Heading column (first item in the track) ── */}
        <div className="process-heading-col">
          <span className="process-label">(PROCESS)</span>
          <h2 className="process-main-heading">
            HOW WE
            <br />
            WORK
          </h2>
        </div>

        {/* ── 4 card columns ── */}
        {steps.map((step, i) => (
          <div key={i} className="process-card">
            <div className="process-card-top">
              <span className="process-step-label">
                STEP {step.number}
                <span className="process-dot">.</span>
              </span>
            </div>
            <div className="process-card-bottom">
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-desc">{step.description}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Process;

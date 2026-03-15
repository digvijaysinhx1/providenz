import React, { useState } from "react";

const Services = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div id="services" className="services">
      <div className="container">
        <div className="services-wrapper overflow-hidden cursor-default px-2 gap-14 py-37 flex flex-col items-center justify-center">
          {/* heading */}
          <div className="service-main-heading flex flex-col md:flex-row items-start gap-2.5">
            <span className="md:hidden flex">
              {"("}SERVICES{")"}
            </span>

            <h2 className="heading2 text-[#ff4925]">HOW WE CAN HELP</h2>

            <span className="hidden md:flex">
              {"("}SERVICES{")"}
            </span>
          </div>

          <div className="service-types w-full flex flex-col lg:hidden">
            <div
              className="w-full  border-t border-b border-neutral-700 py-6 cursor-pointer"
              onClick={() => toggle(1)}
            >
              <div className="flex service-heading justify-between items-center">
                <h3 className="heading3">
                  01<span className="text-[#ff4925]">.</span> Designing
                </h3>

                <span
                  className={`text-2xl text-[#ff4925] transition-transform duration-300 ${
                    open === 1 ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>

              <div
                className={`overflow-hidden text-[#d8d8d8] transition-all duration-500 ease-in-out
                ${open === 1 ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"}`}
              >
                <p>
                  We design modern and thoughtful websites that reflect your
                  brand and communicate your message clearly. Every layout is
                  crafted with attention to detail, ensuring a clean visual
                  hierarchy and intuitive experience.
                </p>
              </div>
            </div>

            <div
              className="w-full border-t border-b border-neutral-700 py-6 cursor-pointer"
              onClick={() => toggle(2)}
            >
              <div className="flex service-heading justify-between items-center">
                <h3 className="heading3">
                  02<span className="text-[#ff4925]">.</span> Development
                </h3>

                <span
                  className={`text-2xl text-[#ff4925] transition-transform duration-300 ${
                    open === 2 ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>

              <div
                className={`overflow-hidden text-[#d8d8d8] transition-all duration-500 ease-in-out
                ${open === 2 ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"}`}
              >
                <p>
                  We turn designs into fast, reliable, and scalable websites
                  using modern technologies. Our development approach focuses on
                  clean structure, smooth performance, and responsive
                  functionality.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div
              className="w-full border-t border-b border-neutral-700 py-6 cursor-pointer"
              onClick={() => toggle(3)}
            >
              <div className="flex service-heading justify-between items-center">
                <h3 className="heading3">
                  03<span className="text-[#ff4925]">.</span> Branding
                </h3>

                <span
                  className={`text-2xl text-[#ff4925] transition-transform duration-300 ${
                    open === 3 ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>

              <div
                className={`overflow-hidden text-[#d8d8d8] transition-all duration-500 ease-in-out
                ${open === 3 ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"}`}
              >
                <p>
                  We help businesses build a strong visual identity that people
                  recognize and remember. From logo design to brand colors and
                  typography, we create cohesive brand systems.
                </p>
              </div>
            </div>
          </div>

          {/* ========================= */}
          {/* DESKTOP HOVER VERSION */}
          {/* ========================= */}

          <div className="hidden lg:flex w-full flex-col">
            {/* Service 1 */}
            <div className="group flex justify-between items-center border-t border-neutral-700 py-8 hover:bg-[#181818] transition-all">
              <h3 className="heading3 transition-all duration-300 group-hover:translate-x-2">
                01<span className="text-[#ff4925]">.</span> Designing
              </h3>

              <p className="max-w-xl text-[#d8d8d8] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                We design modern and thoughtful websites that reflect your brand
                and communicate your message clearly. Every layout is crafted
                with attention to detail, ensuring a clean visual hierarchy,
                responsive behavior, and an experience that feels intuitive
                across all devices.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group flex justify-between items-center border-t border-neutral-700 py-8 hover:bg-[#181818] transition-all">
              <h3 className="heading3 transition-all duration-300 group-hover:translate-x-2">
                02<span className="text-[#ff4925]">.</span> Development
              </h3>

              <p className="max-w-xl text-[#d8d8d8] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                We turn designs into fast, reliable, and scalable websites using
                modern technologies. Our development approach focuses on clean
                structure, smooth performance, and responsive functionality so
                your website works seamlessly on every screen.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group flex justify-between items-center border-t border-neutral-700 py-8 hover:bg-[#181818] transition-all">
              <h3 className="heading3 transition-all duration-300 group-hover:translate-x-2">
                03<span className="text-[#ff4925]">.</span> Branding
              </h3>

              <p className="max-w-xl text-[#d8d8d8] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                We help businesses build a strong visual identity that people
                recognize and remember. From logo design to brand colors and
                typography, we create cohesive brand systems that give your
                business a clear and consistent presence online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

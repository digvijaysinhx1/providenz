import React from "react";
import arrow from "../../assets/svg/arrow-up-right.svg";

const StartProject = (props) => {
  return (
    <a href={props.link} className="bg-[#220F0D] transition-all ease-in-out duration-200 hover:bg-[#FF4925] hover:text-black border border-[#FF4925] text-[#FF4925] flex items-center justify-between px-2 py-4 gap-3 rounded-2xl  w-fit">
      {props.text}{" "}
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
};

export default StartProject;

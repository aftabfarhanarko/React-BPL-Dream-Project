import React from "react";
import heroImg from "../../assets/banner-main.png";
import bgImg from "../../assets/bg-shadow.png";

const Hero = () => {
  return (
    <div className="max-w-[1100px] mx-auto  ">
      <div
        className="hero bg-black-500 rounded-2xl"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center pt-10 pb-10">
          <div className="max-w">
            <img className="mx-auto" src={heroImg}></img>
            <h1 className="mb-5 text-4xl font-bold mt-3">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5">Beyond Boundaries Beyond Limits</p>
            <button
              className="bg-[#E7FE29]  hover:bg-[#d8ed19]
            text-black font-semibold py-2 px-6 
            rounded-lg shadow-md btn"
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

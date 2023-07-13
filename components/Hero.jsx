import React from "react";
import Image from "next/image";
import hero from "../public/icons/hero_img.png";
import ellipse from "../public/icons/2.png";
const Hero = () => {
  return (
    <div className="min-h-screen flex py-10 md:flex-row flex-col items-center px-4">
      <div className="flex-1 flex flex-col items-center justify-center h-full">
        <div className="absolute md:top-30 md:right-0 -z-50">
          <Image src={ellipse} alt="ellipse" width="" height="" />
        </div>
        <h1 className="py-14 md:py-0 text-4xl md:text-4xl lg:text-4xl xl:text-6xl px-4 text-center font-orbitron">
          Explore the future of{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F86CF8] to-[#64CEF5]">
            MetaVerse
          </span>
        </h1>
        <p className="md:mt-8 text-xl md:text-3xl lg:text-4xl text-center font-poppins">
          Let&apos;s explore and create your experience with metaverse.
        </p>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-center h-full">
          <div className="">
            <Image
              src={hero}
              alt="hero"
              className="md:w-[570px] h-full object-cover mt-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";
import hero from "../public/icons/hero_img.png";
import ellipse from "../public/icons/2.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen px-4 flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <Image
          src={hero}
          alt="hero_image"
          width=""
          height=""
          className="md:w-9/12 h-full object-cover mt-24"
        />
      </div>
      <div className="absolute right-0"><Image src={ellipse} alt="ellipse" /></div>
      <div className="flex-1">
        <div className="md:text-left text-center mt-5">
          <h3 className="md:text-7xl text-3xl font-orbitron text-white font-bold">
            Explore the future of the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F86CF8] to-[#64CEF5]">
              MetaVerse
            </span>
          </h3>
          <p className="text-2xl mt-4">
            Let&apos;s explore and create your experience with metaverse.
          </p>

          <div className="flex gap-5 items-center justify-center md:justify-start mt-4">
            <button className="w-[173px] p-3 rounded-lg text-[20px]  bg-gradient-to-r from-[#F86CF8] to-[#64CEF5]">
              Get Started
            </button>
            <button className="border w-[173px] p-3 text-[20px] rounded-lg">
              Explore Now
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-5 mt-4">
            <div className="flex flex-col items-center justify-center">
              <p className="font-orbitron text-[24px]">29K+</p>
              <p className="text-[18px] ">ArtWorks</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="font-orbitron text-[26px]">18K+</p>
              <p className="text-[18px] ">Artists</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="font-orbitron text-[26px]">25K+</p>
              <p className="text-[18px] ">Auditions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

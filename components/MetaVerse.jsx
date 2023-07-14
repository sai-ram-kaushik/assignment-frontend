import React from "react";
import Image from "next/image";
import metaverse from "../public/icons/metaverse.png";
const MetaVerse = () => {
  return (
    <section id="metaverse" className="py-10 px-4 flex md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <Image
          src={metaverse}
          alt="hero_image"
          width=""
          height=""
          className="md:w-9/12 h-full object-cover mt-24"
        />
      </div>

      <div className="flex-1">
        <div className="flex flex-col font-bold font-orbitron text-3xl md:text-6xl text-center mt-5">
          <h3>What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F86CF8] to-[#64CEF5]">MetaVerse</span></h3>
          <p className="text-lg">Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor leo. Venenatis cras..</p>
        </div>
      </div>
    </section>
  );
};

export default MetaVerse;

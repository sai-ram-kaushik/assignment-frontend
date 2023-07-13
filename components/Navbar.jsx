import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import ellipse from "../public/icons/1.png";
import Image from "next/image";
const Navbar = () => {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Resource",
      link: "/resource",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "About Us",
      link: "/about",
    },
  ];

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-20 shadow-md z-50">
      <div className="flex items-center justify-between px-4 2xl:px-16 m-4">
        <div className="absolute -top-5 md:-top-10 md:left-[500px] -z-50">
          <Image src={ellipse} alt="ellipse" width="" height=""/>
        </div>
        <div className="flex items-center text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F86CF8] to-[#64CEF5]">
          ZURAVERSE
        </div>
        <div className="flex gap-5">
          <div className="hidden md:flex items-center gap-5 font-poppins">
            {menuList?.map((item, i) => (
              <div key={i} className="text-2xl hover:text-[#F86CF8]">
                <Link href="{item.link}">{item.name}</Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex md:hidden" onClick={handleNav}>
          <HiOutlineMenuAlt3 size={35} />
        </div>
      </div>

      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }>
          <div className="flex items-center justify-center">
            <div className="flex w-full items-center justify-between ">
              <Link href="/">
                <h3 className="flex items-center text-xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F86CF8] to-[#64CEF5]">
                  ZURAVERSE
                </h3>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-black">
                <AiOutlineClose />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col py-24 items-center gap-10 font-poppins text-black">
              {menuList?.map((item, i) => (
                <div key={i} className="text-xl hover:text-[#F86CF8]">
                  <Link href="{item.link}">{item.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

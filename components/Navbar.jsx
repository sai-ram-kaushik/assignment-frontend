import Link from "next/link";
import React, { useState, useEffect } from "react";
import {CgMenuRight} from 'react-icons/cg'
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
  const [sticky, setSticky] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const [open, setOpen] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 30 ? setSticky(true) : setSticky(false);
    });
  });

  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white text-gray-900" : "text-white"}`}>
            <div className='flex item-center justify-between'>
                <div className='mx-7'>
                    <h4 className='uppercase font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#F86CF8] to-[#64CEF5] m-3 md:text-4xl text-2xl'>
                        ZURAVERSE
                    </h4>
                </div>
                <div className={` ${sticky ? 'md:bg-white/0 bg-white' : 'bg-white'} text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}>
                    <ul className='flex items-center gap-1 py-2 text-lg font-poppins'>
                        {
                            menuList?.map((menu, i) => (
                                <li key={i} className='px-6 hover:text-cyan-600'>
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div onClick={() => setOpen(!open)} className={`z-[999] ${open ? "text-gray-900" : "text-gray-800"} text-3xl md:hidden m-5`}>
                    <CgMenuRight />
                </div>
                <div className={`md:hidden text-gray-900 absolute w-2/2 h-screen px-3 py-2 font-medium bg-white top-0  duration-1000 ${open ? 'right-0' : 'right-[-100%]'}`}>
                    <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
                        {
                            menuList?.map((menu, i) => (
                                <li key={i} className='px-6 hover:text-cyan-600'>
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
  );
};

export default Navbar;

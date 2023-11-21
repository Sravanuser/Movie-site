"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [show, setshow] = useState(true);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "trending",
    },
    {
      id: 3,
      link: "shows",
    },
    {
      id: 4,
      link: "movies",
    }
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 text-white bg-slate-950 nav absolute z-50">
      <div>
          <Link
            className="link-underline link-underline-black"
            href=""
          >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLaw6rDHncQj0ssCctL4MeE68_pklOSvQ7qclpt7GUO3oeKo&s" alt="images" width={85} height={85} className="bg-blend-color-darken">
        </img>
          </Link>
      </div>
     {show ? <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
<<<<<<< HEAD
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-blue-500 duration-200 link-underline"
=======
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-cyan-700 duration-200 link-underline"
>>>>>>> 747dafa (second commit)
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>
      : 
        <div className="hidden md:block w-[480px] h-9">
            <input type="search" placeholder="search movie" className="w-full h-full outline:none border:none text-center rounded-lg bg-slate-700 focus:outline-none"/>
        </div>
    }
        <div className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-blue-500 duration-200 link-underline hidden md:block">
        <CiSearch size={30} onClick={()=>setshow(!show)}/>
        </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
          <input type="search" placeholder="search movie" className="w-1/2 h-[35px] outline:none border:none text-center rounded-lg bg-slate-700 focus:outline-none" />
        </ul>
      )}
    </div>
  );
};

export default Navbar;
import Link from "next/link";
import { React, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";

const HomeNavbar = () => {
  return (
    <nav className="sticky py-10 px-10 md:px-20 lg:px-40 flex justify-between top-0 bg-slate-950 bg-opacity-80 backdrop-blur-sm shadow-md z-50 cursor-pointer">
      <div
        className="flex justify-items-center"
        style={{ alignItems: "center" }}
      >
        <Link href="/">
          <h1 className="text-2xl font-mono text-white">
            {`//elroychua`}
            <span className="text-teal-600 hover:text-amber-300">_</span>
          </h1>
        </Link>
      </div>

      <ul className="flex items-center">
        {/* <li>
          <div className="px-4 py-2">
            <BsFillMoonStarsFill className="cursor-pointer text-2xl text-yellow-300" />
          </div>
        </li> */}
        <li>
          <Link href="/resume">
            <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white">
              <CgNotes className="cursor-pointer text-2xl" />
            </button>
            <div className="text-teal-500 text-sm font-bold font-mono text-center hover:text-amber-300">
              resume.
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
const ResumeNavbar = () => {
  return (
    <nav className="sticky py-10 px-10 md:px-20 lg:px-40 flex justify-between top-0 bg-slate-950 bg-opacity-80 backdrop-blur-sm shadow-md z-50 cursor-pointer">
      <div
        className="flex justify-items-center"
        style={{ alignItems: "center" }}
      >
        <Link href="/">
          <h1 className="text-2xl font-mono text-white">
            {`//elroychua`}
            <span className="text-teal-600 hover:text-amber-300">_</span>
          </h1>
        </Link>
      </div>

      <ul className="flex items-center">
        {/* <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
        </li> ml-8*/}
        <li>
          <Link href="/">
            <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white">
              <AiOutlineHome className="cursor-pointer text-2xl" />
            </button>
            <div className="text-teal-500 text-sm font-bold font-mono text-center hover:text-amber-300">
              home.
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const navbar = ({ activePage }) => {
  if (activePage === "home") return <HomeNavbar />;
  else if (activePage === "resume") return <ResumeNavbar />;
  else if (activePage === "project") return <HomeNavbar />;
  else return 0;
};
export default navbar;

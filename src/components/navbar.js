import Link from "next/link";
import { React, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
const navClassName =
  "sticky py-4 px-10 md:px-20 lg:px-40 flex justify-between top-0 dark:bg-slate-950 dark:bg-opacity-80 bg-white dark:backdrop-blur-sm shadow-md z-50 cursor-pointer";
const navText = "text-2xl font-mono text-black dark:text-white";
const HomeNavbar = () => {
  return (
    <nav className={navClassName}>
      <div
        className="flex justify-items-center"
        style={{ alignItems: "center" }}
      >
        <Link href="/">
          <h1 className={navText}>
            {`//elroychua`}
            <span className="text-teal-600 hover:text-amber-300">_</span>
          </h1>
        </Link>
      </div>

      <ul className="flex items-center">
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
    <nav className={navClassName}>
      <div
        className="flex justify-items-center"
        style={{ alignItems: "center" }}
      >
        <Link href="/">
          <h1 className={navText}>
            {`//elroychua`}
            <span className="text-teal-600 hover:text-amber-300">_</span>
          </h1>
        </Link>
      </div>

      <ul className="flex items-center">
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

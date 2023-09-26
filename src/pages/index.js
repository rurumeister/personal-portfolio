import Head from "next/head";
import { RiCopyrightFill } from "react-icons/ri";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import AboutMe from "../components/aboutMe";
// import Skills from "../public/components/skills";
import WorkExperience from "../components/workExp";
import Projects from "../components/projects";
import ScrollToTop from "../components/scrollToTop";
import ContactMe from "../components/contactMe";
import Footer from "../components/footer";
import * as React from "react";

export default function Home() {
  return (
    <div className="bg-slate-900">
      <Head>
        <title>Elroy Chua Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/elroy_icon.png" />
      </Head>
      <Navbar activePage="home" />
      <main className="flex flex-col">
        <section className="p-10 md:px-20 lg:px-40 max-w-7xl self-center">
          <Hero />
          <AboutMe />
          <WorkExperience />
          <Projects />
          <ContactMe />
          <Footer />
          <ScrollToTop />
        </section>
      </main>
    </div>
  );
}

import React from "react";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { About } from "./About";
import { Projects } from "./Projects";

export const Home = () => {
  return (
    <>
      <div className="   bg-stone-300">
        <div className="flex flex-col md:flex-row mb-4 md:max-w-6xl md:mx-auto ml-4 mr-4 ">
          <div className="md:w-1/2 mt-10 md:mt-48 gap-4 flex flex-col order-2 md:order-1">
            <div>
              <span className="font-semibold md:text-xl">
                Welcome In My Feed
              </span>
              <div className="flex font-semibold text-2xl md:text-4xl gap-2">
                <h1>Hello,I'm a </h1>
                <ReactTyped
                  className="text-red-700"
                  strings={["Krunal Panchal", "Web Developer"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </div>
            </div>
            <p className="md:text-base text-justify text-sm font-semibold">
              As a proficient MERN stack developer, I specialize in building
              dynamic, responsive web applications. I combine MongoDB,
              Express.js, React, and Node.js to deliver seamless user
              experiences.
            </p>
            <br />
            <div className="flex md:gap-4 gap-5 ">
              <FaHtml5 size={24} className="hover:scale-x-110" />
              <FaCss3Alt size={24} className="hover:scale-x-110" />
              <RiJavascriptFill size={24} className="hover:scale-x-110" />
              <FaReact size={24} className="hover:scale-x-110" />
              <FaNodeJs size={24} className="hover:scale-x-110" />
              <SiExpress size={24} className="hover:scale-x-110" />
              <BiLogoMongodb size={24} className="hover:scale-x-110" />
              <SiTailwindcss size={24} className="hover:scale-x-110" />
            </div>
          </div>

          <div className="order-1 md:order-2 md:mt-20 mt-20">
            <img src="/profile.png" alt="" className="md:w-[450px] md:h-[450px]  md:ml-44"/></div>
        </div>
          <hr className="border border-black"/>
      </div>
     
      <Projects/>
      <About/>
    </>
    
  );
};

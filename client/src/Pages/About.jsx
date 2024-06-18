import React from "react";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiTailwindcss } from "react-icons/si";



export const About = () => {



  return (
    <div>
    <div className="bg-slate-300 md:pt-16 pt-8 min-h-screen">
      <div className="md:max-w-6xl md:mx-auto ml-4 mr-4 md:pb-16 pb-8">
        <div>
        <h1 className="md:text-4xl text-2xl  font-semibold ">About</h1>
        
        <div className="md:mt-6 font-medium mt-2">
          <p className="md:text-xl">
            Hello ! My name is krunal Panchal. I enjoy creating <span className="text-yellow-700">fun</span>{" "}
            interactive things that live on the internet
          </p>
          <p className="md:text-xl">Fast to forward to today, I'm doing different technologies like</p>
          <div className="flex gap-6 md:gap-24 mt-6">
            <div className="flex flex-col gap-3">
              <p className="flex  gap-2 items-center text-yellow-700">- Javascript (ES6+)<RiJavascriptFill size={24} className="hover:scale-x-110" /></p>
              <p className="flex  gap-2 items-center text-yellow-700">- Node <FaNodeJs size={20} className="hover:scale-x-110" />
              </p>
              <p className="flex  gap-2 items-center text-yellow-700">- MongoDB <BiLogoMongodb size={20} className="hover:scale-x-110" />
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="flex  gap-2 items-center text-yellow-700">- ReactJs <FaReact size={20} className="hover:scale-x-110" />
              </p>
              <p className="flex  gap-2 items-center text-yellow-700">- Express <SiExpress size={20} className="hover:scale-x-110" />
              </p>
              <p className="flex  gap-2 items-center text-yellow-700">- TailwindCss <SiTailwindcss size={20} className="hover:scale-x-110" />
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
    <hr className="border border-black shadow-md"/>
    </div>
  );
};

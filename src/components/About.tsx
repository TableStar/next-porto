'use client'

import Image from "next/image";
import React from "react";
import book from "@/assets/book.png";
import pc from "@/assets/pc.png";
import card from "@/assets/card.png";
import finance from "@/assets/finance.png";


const About = () => {
  const onButtonClick = () => {
    const pdfUrl = "/CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">
        About <span className="text-orange-400 ">Me</span>
      </h1>
      <div className="px-6 md:px-0 grid md:grid-cols-8 gap-6 place-items-center">
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row  p-6">
            <Image src={book} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Education</h2>
              <p className="text-lg text-white/90 mt-2">
                I hold a degree in Medical Education and am an alumnus of
                Purwadhika Digital Technology School&#39;s Web Development Bootcamp.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={finance} alt="finance" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">
                Problem-solving
              </h2>
              <p className="text-lg text-white/90 mt-2">
                I approach challenges with a logical and systemic mindset.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={card} alt="card" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Experience</h2>
              <p className="text-lg text-white/90 mt-2">
                I have a diverse portfolio of projects.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={pc} alt="pc" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">
                Technical Skill
              </h2>
              <p className="text-sm text-white/90 mt-2">
                As a Fullstack Web Developer, I specialize in React JS and
                Tailwind CSS. My expertise extends to backend technologies,
                including Express JS for server-side development, SQL databases
                for efficient data management, TypeScript for enhanced code
                quality, and Golang for high-performance applications.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-24">
        <button onClick={onButtonClick} className="w-[300px] h-[70px] bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 font-semibold text-xl rounded-xl">
          Download My Resume
        </button>
      </div>
    </div>
  );
};

export default About;

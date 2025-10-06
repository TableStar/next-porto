"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import project2 from "@/assets/proj2.png";
import project1 from "@/assets/proj1.png";

const projects = [
  {
    title: "Weather Report",
    desc: "A Weather forecast website built with Next.js and TypeScript. Implemented features for checking weather in current location and searched locations, integrating data from OpenWeatherMap API.",
    devStack: "Next.JS, Tailwind CSS",
    link: "#",
    git: "#",
    src: project1,
  },
  {
    title: "FindTix",
    desc: "FindTix is an event ticketing website that offers user management features, including account registration and login authentication. It has a ticket purchase system with a shopping cart and integrated payment processing through Midtrans payment gateway, enabling users to easily browse, select, and securely buy tickets for events.",
    devStack: "React, Tailwind CSS, Express.JS, MySQL Database",
    link: "#",
    git: "#",
    src: project2,
  },
];

const Portofolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381A5F] py-16 mt-24"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
        Selected <span className="text-orange-400 ">Projects</span>
      </h1>
      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-32 space-y-24">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex flex-col ${
              (i + 1) % 2 === 0
                ? "md:flex-row-reverse gap-12"
                : "md:flex-row"
            }`}
          >
            <div className="space-y-2 max-w-[550px] ">
              <h2 className="text-7xl my-4 text-white/70">{`0${i + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                {project.devStack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6">
                  Link
                </a>
                <a href={project.git}>GitHub</a>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[500px] w-[350px] object-cover border rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portofolio;

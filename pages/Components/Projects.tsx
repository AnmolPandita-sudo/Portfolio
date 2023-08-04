"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import netflix from "../images/web-streaming-app.png";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        id="projects"
        className="h-screen flex relative overflow-hidden flex-col text-center md:flex-row max-w-full px-10 justify-evenly mx-auto "
      >
        <h3 className="absolute top-24 uppercase tracking-[17px] text-gray-500 font-bold text-2xl">
          Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin  scrollbar-track-amber-500/50 scrollbar-thumb-amber-700 scrollbar-corner-blue-200">
          {projects.map((project, i) => (
            // eslint-disable-next-line react/jsx-key
            <div className=" w-[100%] flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center md:mt-20 h-screen">
              <motion.div
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Image
                  src={netflix}
                  alt="Project"
                  height={600}
                  width={600}
                  className="mx-auto object-cover"
                />
              </motion.div>

              <div>
                <h4>
                  Case Study {i + 1} of {projects.length} : Web Streaming App
                </h4>
                <p className="  md:text-lg text-center md:text-left md:mx-64">
                  Creating a Netflix clone in React.js involves building a web
                  application that mimics the functionality and design of the
                  popular streaming platform Netflix. The purpose of the clone
                  is to provide users with a similar experience to Netflix,
                  allowing them to browse, search for, and watch movies and TV
                  shows.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full absolute top-[28%] bg-[#F7AB0A]/20 left-0  h-96 -skew-y-12 rounded-full "></div>
      </motion.div>
    </div>
  );
}

export default Projects;

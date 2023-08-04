"use cliennt";
import "app/globals.css";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiCss3,
  SiFirebase,
  SiJavascript,
  SiReact,
  SiThemoviedatabase,
} from "react-icons/si";

import logo from "@/images/experience.svg";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="bg-[#393838] flex flex-col items-center flex-shrink-0 xl:w-[600px] md:w-[450px] w-96 rounded-3xl mt-24 snap-center p-10 hover:opacity-100 opacity-60 transition-opacity duration-300 cursor-pointer overflow-hidden">
      <motion.img
        initial={{
          y: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="/pages/images/experience.jpg"
        alt=" "
        className="w-24 h-24 xl:w-28 xl:h-28 rounded-full object-cover object-center bg-[#3f3f3f] mx-auto -mt-4"
      />

      <div className="px-0 bg-[#393838] mb-2 mx-2">
        <h4 className="text-5xl font-light">CEO</h4>
        <p className="font-bold text-3xl mt-1">Fresher</p>
        <div className="flex space-x-2 my-2 text-xl ml-2 mt-3 justify-center">
          <SiJavascript />
          <SiCss3 />
          <SiReact />
          <SiFirebase />
          <SiThemoviedatabase />
        </div>
        <p className="uppercase py-5 text-gray-400">Self made</p>
        <ul className="list-disc space-y-4 text-lg overflow-y-auto h-32 w-full scrollable-container">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
